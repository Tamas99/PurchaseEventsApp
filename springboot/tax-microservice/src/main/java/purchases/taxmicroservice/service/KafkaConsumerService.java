package purchases.taxmicroservice.service;

import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;
import purchases.taxmicroservice.model.PurchaseEvent;
import purchases.taxmicroservice.model.Tax;
import purchases.taxmicroservice.repository.TaxRepository;

import java.util.List;
import java.util.Optional;

@Service
public class KafkaConsumerService {

    private final TaxRepository taxRepository;

    public KafkaConsumerService(TaxRepository taxRepository) {
        this.taxRepository = taxRepository;
    }

    @KafkaListener(
            topics = "${spring.kafka.topic:myTopic}",
            groupId = "${spring.kafka.group-id:myGroup}",
            containerFactory = "purchaseEventConcurrentKafkaListenerContainerFactory"
    )
    public void listen(PurchaseEvent purchaseEvent) {
        System.out.println("Received Message: " + purchaseEvent.toString());
        handleEvent(purchaseEvent);
    }

    private void handleEvent(PurchaseEvent purchaseEvent) {
        List<Tax> taxes = taxRepository.findAll();
        Optional<Tax> targetTax = taxes.stream()
                .filter(tax -> tax.getName().name().equals(purchaseEvent.getPole()))
                .findFirst();
        targetTax.ifPresent(tax -> {
            taxes.remove(tax);
            Float newTaxValue = (tax.getValue() + tax.getQuantity()) / (taxes.get(0).getValue() + taxes.get(1).getValue() + taxes.get(2).getValue() + (taxes.get(0).getQuantity() + taxes.get(1).getQuantity() + taxes.get(2).getQuantity())/3);
            tax.setValue(tax.getValue() + newTaxValue);
            tax.setQuantity(tax.getQuantity() + 1);
            Tax updatedTax = taxRepository.save(tax);
            System.out.println("Updated Tax: " + updatedTax.toString());
        });
    }
}
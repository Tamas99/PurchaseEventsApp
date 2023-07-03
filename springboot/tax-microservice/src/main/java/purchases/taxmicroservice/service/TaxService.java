package purchases.taxmicroservice.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import purchases.taxmicroservice.event.PurchaseToHandleEvent;
import purchases.taxmicroservice.model.PurchaseEvent;
import purchases.taxmicroservice.model.Tax;
import purchases.taxmicroservice.repository.TaxRepository;

import java.util.List;
import java.util.Optional;
import org.springframework.context.event.EventListener;

@Service
public class TaxService {

    private final TaxRepository taxRepository;
    private static final Logger logger = LoggerFactory.getLogger(TaxService.class);

    public TaxService(TaxRepository taxRepository) {
        this.taxRepository = taxRepository;
    }

    public Float getOne(String pole) {
        return taxRepository.findItemByName(pole).getValue();
    }

    public List<Tax> getAll() {
        return taxRepository.findAll();
    }


    public Tax updateOne(Tax tax) {
        return taxRepository.save(tax);
    }


    public void deleteAll() {
        taxRepository.deleteAll();
    }

    @EventListener
    private void handleEvent(PurchaseToHandleEvent purchaseToHandleEvent) {
        PurchaseEvent purchaseEvent = purchaseToHandleEvent.getPurchaseEvent();
        List<Tax> taxes = taxRepository.findAll();
        Optional<Tax> targetTax = taxes.stream()
                .filter(tax -> tax.getName().name().equals(purchaseEvent.getRegion()))
                .findFirst();
        targetTax.ifPresent(tax -> {
            taxes.remove(tax);
            Float newTaxValue = (tax.getValue() + tax.getQuantity()) / (taxes.get(0).getValue() + taxes.get(1).getValue() + taxes.get(2).getValue() + (taxes.get(0).getQuantity() + taxes.get(1).getQuantity() + taxes.get(2).getQuantity()) / 3);
            tax.setValue(tax.getValue() + newTaxValue);
            tax.setQuantity(tax.getQuantity() + 1);
            Tax updatedTax = updateOne(tax);
            logger.info("Updated Tax: " + updatedTax);
        });
    }
}

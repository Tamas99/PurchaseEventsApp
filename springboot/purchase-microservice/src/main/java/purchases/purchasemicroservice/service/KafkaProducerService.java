package purchases.purchasemicroservice.service;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;
import purchases.purchasemicroservice.model.PurchaseEvent;

@Service
public class KafkaProducerService {

    private final KafkaTemplate<String, PurchaseEvent> kafkaTemplate;
    private static final String TOPIC = "purchase_events";

    public KafkaProducerService(KafkaTemplate<String, PurchaseEvent> kafkaTemplate) {
        this.kafkaTemplate = kafkaTemplate;
    }

    public void sendPurchase(PurchaseEvent purchaseEvent) {
        this.kafkaTemplate.send(TOPIC, purchaseEvent);
    }
}

package purchases.taxmicroservice.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;
import purchases.taxmicroservice.event.PurchaseToHandleEvent;
import purchases.taxmicroservice.model.PurchaseEvent;

@Service
public class KafkaConsumerService {

    private static final Logger logger = LoggerFactory.getLogger(KafkaConsumerService.class);
    private final ApplicationEventPublisher publisher;

    public KafkaConsumerService(ApplicationEventPublisher publisher) {
        this.publisher = publisher;
    }

    @KafkaListener(
            topics = "purchase_events",
            groupId = "purchaseGroup",
            containerFactory = "purchaseEventConcurrentKafkaListenerContainerFactory"
    )
    public void listen(PurchaseEvent purchaseEvent) {
        logger.info("Received Message: " + purchaseEvent);
        PurchaseToHandleEvent purchaseToHandleEvent = new PurchaseToHandleEvent(this, purchaseEvent);
        publisher.publishEvent(purchaseToHandleEvent);
    }
}

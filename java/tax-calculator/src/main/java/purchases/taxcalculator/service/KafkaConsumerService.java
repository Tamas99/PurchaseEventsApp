package purchases.taxcalculator.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;
import purchases.taxcalculator.model.PurchaseEvent;

@Service
public class KafkaConsumerService {

    @Value("${spring.kafka.consumer.group-id:myGroup}")
    private final String groupId = "";

    @Value("${spring.kafka.template.default-topic:myTopic}")
    private final String topic = "";

    @KafkaListener(topics = topic, groupId = groupId)
    public void listen(PurchaseEvent purchaseEvent) {
        System.out.println("Received Message: " + purchaseEvent.getEmail());
    }
}

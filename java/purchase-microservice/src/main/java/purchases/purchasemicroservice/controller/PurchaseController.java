package purchases.purchasemicroservice.controller;
import org.springframework.web.bind.annotation.*;
import purchases.purchasemicroservice.model.PurchaseEvent;
import purchases.purchasemicroservice.service.KafkaProducerService;
import purchases.purchasemicroservice.service.PurchaseService;

import java.util.List;

@RestController
@RequestMapping("/purchase")
public class PurchaseController {

    private final PurchaseService purchaseService;
    private final KafkaProducerService kafkaProducerService;

    public PurchaseController(PurchaseService purchaseService, KafkaProducerService kafkaProducerService) {
        this.purchaseService = purchaseService;
        this.kafkaProducerService = kafkaProducerService;
    }

    @PostMapping
    public PurchaseEvent create(@RequestBody PurchaseEvent purchaseEvent) {
        kafkaProducerService.sendPurchase(purchaseEvent);
        return purchaseService.save(purchaseEvent);
    }

    @GetMapping
    public List<PurchaseEvent> read() {
        return purchaseService.getAll();
    }

    @DeleteMapping
    public void delete() {
        purchaseService.delete();
    }
}

package purchases.purchasemicroservice.service;

import org.springframework.stereotype.Service;
import purchases.purchasemicroservice.model.PurchaseEvent;
import purchases.purchasemicroservice.repository.PurchaseRepository;

import java.util.List;

@Service
public class PurchaseService {

    private final PurchaseRepository purchaseRepository;

    public PurchaseService(PurchaseRepository purchaseRepository) {
        this.purchaseRepository = purchaseRepository;
    }

    public PurchaseEvent save(PurchaseEvent purchaseEvent) {
        return purchaseRepository.save(purchaseEvent);
    }

    public List<PurchaseEvent> getAll() {
        return purchaseRepository.findAll();
    }

    public PurchaseEvent get(String id) {
        return purchaseRepository.findById(id).orElseThrow(() -> new RuntimeException("PurchaseEvent not found"));
    }

    public void delete() {
        purchaseRepository.deleteAll();
    }
}


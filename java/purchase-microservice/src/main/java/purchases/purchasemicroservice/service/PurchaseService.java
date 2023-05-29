package purchases.purchasemicroservice.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import purchases.purchasemicroservice.model.PurchaseEvent;
import purchases.purchasemicroservice.repository.PurchaseRepository;
import org.springframework.beans.factory.annotation.Value;

import java.util.List;

@Service
public class PurchaseService {

    private final PurchaseRepository purchaseRepository;
    private final RestTemplate restTemplate;
    private final String apiUrl;

    public PurchaseService(PurchaseRepository purchaseRepository, RestTemplate restTemplate, @Value("${API_BASE_URL}") String apiUrl) {
        this.purchaseRepository = purchaseRepository;
        this.restTemplate = restTemplate;
        this.apiUrl = apiUrl;
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

    public Float getTaxValue(String pole) {
        Float taxValue = restTemplate.getForObject(apiUrl + "/tax/" + pole, Float.class);

    }
}


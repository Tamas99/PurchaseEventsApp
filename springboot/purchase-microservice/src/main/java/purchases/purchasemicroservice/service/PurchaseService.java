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
    private final String taxCalculatorUrl;

    public PurchaseService(PurchaseRepository purchaseRepository, RestTemplate restTemplate, @Value("${tax.microservice.url:http://localhost:8020}") String taxCalculatorUrl) {
        this.purchaseRepository = purchaseRepository;
        this.restTemplate = restTemplate;
        this.taxCalculatorUrl = taxCalculatorUrl;
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
        return restTemplate.getForObject(taxCalculatorUrl + "/tax/" + pole, Float.class);
    }

    public Float calculateFullPrice(PurchaseEvent purchaseEvent) {
        Float currentTax = getTaxValue(purchaseEvent.getPole());
        float basePrice = Float.parseFloat(purchaseEvent.getPrice());
        return basePrice + (basePrice * currentTax)/100;
    }
}


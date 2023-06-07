package purchases.purchasemicroservice.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import purchases.purchasemicroservice.model.PurchaseEvent;
import purchases.purchasemicroservice.repository.PurchaseRepository;
import org.springframework.beans.factory.annotation.Value;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;

@Service
public class PurchaseService {

    private final PurchaseRepository purchaseRepository;
    private final RestTemplate restTemplate;
    private final String taxMicroserviceUrl;
    private static final Logger logger = LoggerFactory.getLogger(PurchaseService.class);

    public PurchaseService(PurchaseRepository purchaseRepository, RestTemplate restTemplate, @Value("${tax.microservice.url:http://localhost:8020}") String taxMicroserviceUrl) {
        this.purchaseRepository = purchaseRepository;
        this.restTemplate = restTemplate;
        this.taxMicroserviceUrl = taxMicroserviceUrl;

    }

    private PurchaseEvent save(PurchaseEvent purchaseEvent) {
        return purchaseRepository.save(purchaseEvent);
    }

    public List<PurchaseEvent> getAll() {
        return purchaseRepository.findAll();
    }

    public void deleteAll() {
        purchaseRepository.deleteAll();
    }

    private Float getTaxValue(String region) {
        return restTemplate.getForObject(taxMicroserviceUrl + "/tax/" + region, Float.class);
    }

    private float calculateFullPrice(float housePrice, float tax) {
        return housePrice + (housePrice * tax)/100;
    }

    public PurchaseEvent processEvent(PurchaseEvent purchaseEvent) {
        float taxValue = getTaxValue(purchaseEvent.getRegion());
        float fullPrice = calculateFullPrice(Float.parseFloat(purchaseEvent.getPrice()), taxValue);
        purchaseEvent.setPrice(Float.toString(fullPrice));
        PurchaseEvent savedPurchaseEvent = save(purchaseEvent);
        logger.info("Saved purchase event: " + savedPurchaseEvent.toString());
        return purchaseEvent;
    }
}


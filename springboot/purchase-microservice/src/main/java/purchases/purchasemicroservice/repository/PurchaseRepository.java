package purchases.purchasemicroservice.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import purchases.purchasemicroservice.model.PurchaseEvent;

public interface PurchaseRepository extends MongoRepository<PurchaseEvent, String> {
}

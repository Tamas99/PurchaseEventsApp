package purchases.taxcalculator.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import purchases.taxcalculator.model.Tax;

public interface TaxCalculatorRepository extends MongoRepository<Tax, String> {
}

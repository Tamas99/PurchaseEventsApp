package purchases.taxcalculator.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import purchases.taxcalculator.model.Tax;

public interface TaxCalculatorRepository extends MongoRepository<Tax, String> {

    @Query("{name:'?0'}")
    Tax findItemByName(String pole);

}

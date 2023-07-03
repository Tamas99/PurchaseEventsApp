package purchases.taxmicroservice.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import purchases.taxmicroservice.model.Tax;

public interface TaxRepository extends MongoRepository<Tax, String> {

    @Query("{name:'?0'}")
    Tax findItemByName(String pole);

}

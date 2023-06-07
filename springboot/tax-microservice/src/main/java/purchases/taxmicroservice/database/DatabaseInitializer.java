package purchases.taxmicroservice.database;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import purchases.taxmicroservice.model.Region;
import purchases.taxmicroservice.model.Tax;
import purchases.taxmicroservice.repository.TaxRepository;

import java.util.ArrayList;

@Configuration
public class DatabaseInitializer {

    @Bean
    CommandLineRunner initDatabase(TaxRepository taxRepository) {
        return args -> {
            if (taxRepository.findAll().equals(new ArrayList<Tax>())) {
                for (Region region : Region.values()) {
                    taxRepository.save(new Tax(region, 10F, 0));
                }
            }
        };
    }
}

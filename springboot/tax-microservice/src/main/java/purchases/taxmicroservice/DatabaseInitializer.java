package purchases.taxmicroservice;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import purchases.taxmicroservice.model.Pole;
import purchases.taxmicroservice.model.Tax;
import purchases.taxmicroservice.repository.TaxRepository;

import java.util.ArrayList;

@Configuration
public class DatabaseInitializer {

    @Bean
    CommandLineRunner initDatabase(TaxRepository taxRepository) {
        return args -> {
            if (taxRepository.findAll().equals(new ArrayList<Tax>())) {
                for (Pole pole : Pole.values()) {
                    taxRepository.save(new Tax(pole, 10F, 0));
                }
            }
        };
    }
}

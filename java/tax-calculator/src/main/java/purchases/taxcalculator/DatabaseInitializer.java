package purchases.taxcalculator;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import purchases.taxcalculator.model.Pole;
import purchases.taxcalculator.model.Tax;
import purchases.taxcalculator.repository.TaxCalculatorRepository;

import java.util.ArrayList;
import java.util.List;

@Configuration
public class DatabaseInitializer {

    @Bean
    CommandLineRunner initDatabase(TaxCalculatorRepository taxCalculatorRepository) {
        return args -> {
            if (taxCalculatorRepository.findAll().equals(new ArrayList<Tax>())) {
                for (Pole pole : Pole.values()) {
                    taxCalculatorRepository.save(new Tax(pole, 10F, 0));
                }
            }
        };
    }
}

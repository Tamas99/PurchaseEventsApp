package purchases.taxcalculator.service;

import org.springframework.stereotype.Service;
import purchases.taxcalculator.model.Tax;
import purchases.taxcalculator.repository.TaxCalculatorRepository;

import java.util.List;

@Service
public class TaxCalculatorService {

    private final TaxCalculatorRepository taxCalculatorRepository;

    public TaxCalculatorService(TaxCalculatorRepository taxCalculatorRepository) {
        this.taxCalculatorRepository = taxCalculatorRepository;
    }

    public Tax save(Tax tax) {
        return taxCalculatorRepository.save(tax);
    }

    public List<Tax> getAll() {
        return taxCalculatorRepository.findAll();
    }

    public Tax get(String pole) {
        return taxCalculatorRepository.findItemByName(pole);
    }


    public Tax update(String pole, Tax tax) {
        Tax existingTax = get(pole);
        existingTax.setValue(tax.getValue());
        existingTax.setQuantity(tax.getQuantity());
        return taxCalculatorRepository.save(existingTax);
    }


    public void delete() {
        taxCalculatorRepository.deleteAll();
    }
}

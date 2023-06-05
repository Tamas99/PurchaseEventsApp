package purchases.taxmicroservice.service;

import org.springframework.stereotype.Service;
import purchases.taxmicroservice.model.Tax;
import purchases.taxmicroservice.repository.TaxRepository;

import java.util.List;

@Service
public class TaxService {

    private final TaxRepository taxRepository;

    public TaxService(TaxRepository taxRepository) {
        this.taxRepository = taxRepository;
    }

    public Tax save(Tax tax) {
        return taxRepository.save(tax);
    }

    public List<Tax> getAll() {
        return taxRepository.findAll();
    }

    public Tax get(String pole) {
        return taxRepository.findItemByName(pole);
    }


    public Tax update(String pole, Tax tax) {
        Tax existingTax = get(pole);
        existingTax.setValue(tax.getValue());
        existingTax.setQuantity(tax.getQuantity());
        return taxRepository.save(existingTax);
    }


    public void delete() {
        taxRepository.deleteAll();
    }
}

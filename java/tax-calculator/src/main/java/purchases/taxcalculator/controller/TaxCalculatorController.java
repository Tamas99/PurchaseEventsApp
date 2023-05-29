package purchases.taxcalculator.controller;

import org.springframework.web.bind.annotation.*;
import purchases.taxcalculator.model.Tax;
import purchases.taxcalculator.service.TaxCalculatorService;

import java.util.List;

@RestController
@RequestMapping("/tax")
public class TaxCalculatorController {

    private final TaxCalculatorService taxCalculatorService;

    public TaxCalculatorController(TaxCalculatorService taxCalculatorService) {
        this.taxCalculatorService = taxCalculatorService;
    }

    @PostMapping
    public Tax create(@RequestBody Tax tax) {
        return taxCalculatorService.save(tax);
    }

    @GetMapping
    public List<Tax> read() {
        return taxCalculatorService.getAll();
    }

    @GetMapping("/{pole}")
    public Tax readOne(@PathVariable String pole) {
        return taxCalculatorService.get(pole);
    }

    @PutMapping("/{pole}")
    public Tax update(@PathVariable String pole, @RequestBody Tax tax) {
        return taxCalculatorService.update(pole, tax);
    }

    @DeleteMapping
    public void delete() {
        taxCalculatorService.delete();
    }
}

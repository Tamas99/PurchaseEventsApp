package purchases.taxmicroservice.controller;

import org.springframework.web.bind.annotation.*;
import purchases.taxmicroservice.model.Tax;
import purchases.taxmicroservice.service.TaxService;

import java.util.List;

@RestController
@RequestMapping("/tax")
public class TaxController {

    private final TaxService taxService;

    public TaxController(TaxService taxService) {
        this.taxService = taxService;
    }

    @PostMapping
    public Tax create(@RequestBody Tax tax) {
        return taxService.save(tax);
    }

    @GetMapping
    public List<Tax> read() {
        return taxService.getAll();
    }

    @GetMapping("/{pole}")
    public Float readOne(@PathVariable String pole) {
        return taxService.get(pole).getValue();
    }

    @PutMapping("/{pole}")
    public Tax update(@PathVariable String pole, @RequestBody Tax tax) {
        return taxService.update(pole, tax);
    }

    @DeleteMapping
    public void delete() {
        taxService.delete();
    }
}

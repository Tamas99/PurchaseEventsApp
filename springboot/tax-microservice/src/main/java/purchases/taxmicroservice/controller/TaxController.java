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

    @GetMapping("/{pole}")
    public Float getOne(@PathVariable String pole) {
        return taxService.getOne(pole);
    }

    @GetMapping
    public List<Tax> getAll() {
        return taxService.getAll();
    }

    @DeleteMapping
    public void deleteAll() {
        taxService.deleteAll();
    }
}

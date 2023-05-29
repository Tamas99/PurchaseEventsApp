package purchases.taxcalculator.model;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "taxes")
public class Tax {

    @Id
    private String id;

    private Pole name;

    private Float value;

    private Integer quantity;

    public Tax(Pole name, Float value, Integer quantity) {
        this.name = name;
        this.value = value;
        this.quantity = quantity;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Pole getName() {
        return name;
    }

    public void setName(Pole name) {
        this.name = name;
    }

    public Float getValue() {
        return value;
    }

    public void setValue(Float value) {
        this.value = value;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }
}

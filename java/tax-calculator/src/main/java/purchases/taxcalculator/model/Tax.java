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

}

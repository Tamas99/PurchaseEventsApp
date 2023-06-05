package purchases.taxmicroservice.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.io.Serializable;

@Document(collection = "purchases")
public class PurchaseEvent implements Serializable {

    @Id
    private String id;

    private String index;

    private String name;

    private String gender;

    private String email;

    private String phone;

    private String dateOfBirth;

    private String houseNumber;

    private String price;

    private String sqFt;

    private String bedrooms;

    private String bathrooms;

    private String pole;

    public PurchaseEvent(String id, String index, String name, String gender, String email, String phone, String dateOfBirth, String houseNumber, String price, String sqFt, String bedrooms, String bathrooms, String pole) {
        this.id = id;
        this.index = index;
        this.name = name;
        this.gender = gender;
        this.email = email;
        this.phone = phone;
        this.dateOfBirth = dateOfBirth;
        this.houseNumber = houseNumber;
        this.price = price;
        this.sqFt = sqFt;
        this.bedrooms = bedrooms;
        this.bathrooms = bathrooms;
        this.pole = pole;
    }

    public PurchaseEvent() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getIndex() {
        return index;
    }

    public void setIndex(String index) {
        this.index = index;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getHouseNumber() {
        return houseNumber;
    }

    public void setHouseNumber(String houseNumber) {
        this.houseNumber = houseNumber;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getSqFt() {
        return sqFt;
    }

    public void setSqFt(String sqFt) {
        this.sqFt = sqFt;
    }

    public String getBedrooms() {
        return bedrooms;
    }

    public void setBedrooms(String bedrooms) {
        this.bedrooms = bedrooms;
    }

    public String getBathrooms() {
        return bathrooms;
    }

    public void setBathrooms(String bathrooms) {
        this.bathrooms = bathrooms;
    }

    public String getPole() {
        return pole;
    }

    public void setPole(String pole) {
        this.pole = pole;
    }
}
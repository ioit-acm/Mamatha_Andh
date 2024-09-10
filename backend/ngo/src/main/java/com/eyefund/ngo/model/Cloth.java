package com.eyefund.ngo.model;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "clothing")
public class Cloth {

    @Id
    private String id;
    private String name;
    private String email;
    private long number;
    private String clothType;
    private Date createDate;

    public Cloth() {
    }

    public Cloth(String id, String name, String email, long number, String clothType, Date createDate) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.number = number;
        this.clothType = clothType;
        this.createDate = createDate;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public long getNumber() {
        return number;
    }

    public void setNumber(long number) {
        this.number = number;
    }

    public String getClothType() {
        return clothType;
    }

    public void setClothType(String clothType) {
        this.clothType = clothType;
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

}

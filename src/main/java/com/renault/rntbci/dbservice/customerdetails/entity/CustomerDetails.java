package com.renault.rntbci.dbservice.customerdetails.entity;
import jakarta.persistence.*;
import org.antlr.v4.runtime.misc.NotNull;

@Entity
public class CustomerDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long customer_id;

    @NotNull
    private String customer_name;

    @Column(name = "customer_mobile_number", unique = true)
    private String customer_mobile_number;

    @NotNull
    @Column(unique = true)
    private String customer_mail_id;

    @Column(unique = true)
    private String password;

 String getCustomer_mail_id() {
        return customer_mail_id;
    }

    public void setCustomer_mail_id(String customer_mail_id) {
        this.customer_mail_id = customer_mail_id;
    }

    public long getCustomer_id() {
        return customer_id;
    }

    public void setCustomer_id(long customer_id) {
        this.customer_id = customer_id;
    }

    public  String getCustomer_name() {
        return customer_name;
    }

    public void setCustomer_name (String customer_name) {
        this.customer_name = customer_name;
    }

    public String getCustomer_mobile_number() {
        return customer_mobile_number;
    }

    public void setCustomer_mobile_number(String customer_mobile_number) {
        this.customer_mobile_number = customer_mobile_number;
    }

    public  String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

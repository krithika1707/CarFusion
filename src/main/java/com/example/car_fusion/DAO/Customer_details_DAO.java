package com.example.car_fusion.DAO;

import jakarta.persistence.Column;
import org.antlr.v4.runtime.misc.NotNull;

public class Customer_details_DAO {

    @Column(unique = true)
    private String customer_mail_id;
    @NotNull
    @Column(nullable = false)
    private String password;

    @Override
    public String toString() {
        return "Customer_details_DAO{" +
                "customer_mail_id='" + customer_mail_id + '\'' +
                ", password='" + password + '\'' +
                '}';
    }

    public String getCustomer_mail_id() {
        return customer_mail_id;
    }

    public void setCustomer_mail_id(String customer_mail_id) {
        this.customer_mail_id = customer_mail_id;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

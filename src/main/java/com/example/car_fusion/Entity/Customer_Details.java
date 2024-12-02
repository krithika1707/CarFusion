package com.example.car_fusion.Entity;

import jakarta.persistence.*;

import org.antlr.v4.runtime.misc.NotNull;

@Entity

public class Customer_Details {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long customer_id;
    @Column(unique = true)
    private String customer_mail_id;
    @NotNull
    private String customer_name;
    @NotNull
    @Column(nullable = false)
    private String password;
    @Column(unique = true)
    private String mobile_number;

    public long getCustomer_id() {
        return customer_id;
    }

    public void setCustomer_id(long customer_id) {
        this.customer_id = customer_id;
    }

    public String getCustomer_mail_id() {
        return customer_mail_id;
    }

    public void setCustomer_mail_id(String customer_mail_id) {
        this.customer_mail_id = customer_mail_id;
    }

    public String getCustomer_name() {
        return customer_name;
    }

    public void setCustomer_name(String customer_name) {
        this.customer_name = customer_name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getMobile_number() {
        return mobile_number;
    }

    public void setMobile_number(String mobile_number) {
        this.mobile_number = mobile_number;
    }

    @Override
    public String toString() {
        return "Customer_Details{" +
                "customer_id=" + customer_id +
                ", customer_mail_id='" + customer_mail_id + '\'' +
                ", customer_name='" + customer_name + '\'' +
                ", password='" + password + '\'' +
                ", mobile_number='" + mobile_number + '\'' +
                '}';
    }
}

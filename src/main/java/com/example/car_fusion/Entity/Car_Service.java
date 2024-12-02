package com.example.car_fusion.Entity;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
public class Car_Service {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long service_id;



    private LocalDateTime date_time;
    @OneToOne
    @JoinColumn(name="customer_id")
    private Customer_Details customerDetails;


    public long getService_id() {
        return service_id;
    }

    public void setService_id(long service_id) {
        this.service_id = service_id;
    }

    public Customer_Details getCustomerDetails() {
        return customerDetails;
    }

    public void setCustomerDetails(Customer_Details customerDetails) {
        this.customerDetails = customerDetails;
    }

    public LocalDateTime getDate_time() {
        return date_time;
    }

    public void setDate_time(LocalDateTime date_time) {
        this.date_time = date_time;
    }
}

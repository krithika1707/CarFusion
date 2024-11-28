package com.example.Car_Fusion.Entity;
import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
public class Car_service {
    @Id
            @GeneratedValue(strategy = GenerationType.IDENTITY)
    long car_service_id;
    LocalDateTime dateTime;
    @OneToOne
    @JoinColumn(name = "customer_id")
    Customer_Details details;

    public long getCar_service_id() {
        return car_service_id;
    }

    public void setCar_service_id(long car_service_id) {
        this.car_service_id = car_service_id;
    }

    public LocalDateTime getDateTime() {
        return dateTime;
    }

    public void setDateTime(LocalDateTime dateTime) {
        this.dateTime = dateTime;
    }

    public Customer_Details getDetails() {
        return details;
    }

    public void setDetails(Customer_Details details) {
        this.details = details;
    }
}

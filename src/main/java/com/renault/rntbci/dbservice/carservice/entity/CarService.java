package com.renault.rntbci.dbservice.carservice.entity;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.renault.rntbci.dbservice.customerdetails.entity.CustomerDetails;
import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
public class CarService {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long car_service_id;
    LocalDateTime dateTime;
    @OneToOne
    @JoinColumn(name = "customer_id")

    CustomerDetails details;

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

    public CustomerDetails getDetails() {
        return details;
    }

    public void setDetails(CustomerDetails details) {
        this.details = details;
    }
}

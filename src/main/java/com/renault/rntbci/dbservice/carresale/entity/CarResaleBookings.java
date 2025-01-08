package com.renault.rntbci.dbservice.carresale.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.renault.rntbci.dbservice.customerdetails.entity.CustomerDetails;
import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
public class CarResaleBookings
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long car_booking_id;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "customer_id")

    CustomerDetails details;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "resale_id")
     CarResale resale;
    @Column(unique = true)
    private LocalDateTime dateTime;

    public LocalDateTime getDateTime() {
        return dateTime;
    }

    public void setDateTime(LocalDateTime dateTime) {
        this.dateTime = dateTime;
    }

    public long getCar_booking_id() {
        return car_booking_id;
    }

    public void setCar_booking_id(long car_booking_id) {
        this.car_booking_id = car_booking_id;
    }

    public CustomerDetails getDetails() {
        return details;
    }

    public void setDetails(CustomerDetails details) {
        this.details = details;
    }

    public CarResale getResale() {
        return resale;
    }

    public void setResale(CarResale resale) {
        this.resale = resale;
    }
}

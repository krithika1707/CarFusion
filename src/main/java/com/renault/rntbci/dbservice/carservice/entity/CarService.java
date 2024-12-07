package com.renault.rntbci.dbservice.carservice.entity;

import com.renault.rntbci.dbservice.customerservice.entity.CustomerDetails;
import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
public class CarService {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long service_id;



    private LocalDateTime date_time;
    @OneToOne
    @JoinColumn(name="customer_id")
    private CustomerDetails customerDetails;


    public long getService_id() {
        return service_id;
    }

    public void setService_id(long service_id) {
        this.service_id = service_id;
    }

    public CustomerDetails getCustomerDetails() {
        return customerDetails;
    }

    public void setCustomerDetails(CustomerDetails customerDetails) {
        this.customerDetails = customerDetails;
    }

    public LocalDateTime getDate_time() {
        return date_time;
    }

    public void setDate_time(LocalDateTime date_time) {
        this.date_time = date_time;
    }
}

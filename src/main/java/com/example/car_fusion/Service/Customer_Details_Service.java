package com.example.car_fusion.Service;

import com.example.car_fusion.Entity.Customer_Details;
import com.example.car_fusion.Repository.ICustomer_Details_Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class Customer_Details_Service {


    @Autowired
    ICustomer_Details_Repository customerDetailsRepository;

    public Customer_Details createCustomer(Customer_Details customerDetails) {
        return customerDetailsRepository.save(customerDetails);
    }
}

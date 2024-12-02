package com.example.car_fusion.Controller;


import com.example.car_fusion.Entity.Customer_Details;
import com.example.car_fusion.Service.Customer_Details_Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/customerdetails")
@CrossOrigin("*")
public class Customer_Details_Controller {

    @Autowired
    Customer_Details_Service customerDetailsService;

    @PostMapping("/customeradd")
    public ResponseEntity<Customer_Details> createCustomer(@RequestBody Customer_Details customerDetails){
        Customer_Details obj=customerDetailsService.createCustomer(customerDetails);
        return new ResponseEntity<>(obj, HttpStatus.OK);
    }

}

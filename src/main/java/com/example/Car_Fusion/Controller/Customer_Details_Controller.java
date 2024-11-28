package com.example.Car_Fusion.Controller;
import com.example.Car_Fusion.Entity.Customer_Details;
import com.example.Car_Fusion.Service.Customer_Details_Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/users/signin")
@CrossOrigin("*")
public class Customer_Details_Controller {
    @Autowired
    Customer_Details_Service customerDetailsService;

    @PostMapping("/add")
    public ResponseEntity<Customer_Details> post_Customer_Datas(@RequestBody Customer_Details details) {
return new ResponseEntity<>(customerDetailsService.postCustomerDetails(details),HttpStatus.ACCEPTED);
    }
    }

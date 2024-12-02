package com.example.car_fusion.Controller;

import com.example.car_fusion.DAO.Customer_details_DAO;
import com.example.car_fusion.Entity.Customer_Details;
import com.example.car_fusion.Service.Customer_Details_Service;
import com.example.car_fusion.Service.Customer_Login_services;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/login")
@CrossOrigin("*")
public class Customer_Login {

    @Autowired
    Customer_Login_services customerLoginServices;

    @PostMapping("/customerlogin")
    public ResponseEntity<Object> customerLogin(@RequestBody Customer_details_DAO customerDetailsDao) {
        try{
            Customer_Details cus=customerLoginServices.customerLogin(customerDetailsDao);
            return new ResponseEntity<>(cus,HttpStatus.OK);
        }
        catch (Exception ex){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

    }

}

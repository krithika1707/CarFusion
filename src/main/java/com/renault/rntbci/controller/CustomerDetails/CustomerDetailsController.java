package com.renault.rntbci.controller.CustomerDetails;


import com.renault.rntbci.dbservice.customerservice.entity.CustomerDetails;
import com.renault.rntbci.service.customerdetails.CustomerDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/customerdetails")
@CrossOrigin("*")
public class CustomerDetailsController {

    @Autowired
    CustomerDetailsService customerDetailsService;

    @PostMapping("/customeradd")
    public ResponseEntity<CustomerDetails> createCustomer(@RequestBody CustomerDetails customerDetails){
        CustomerDetails obj=customerDetailsService.createCustomer(customerDetails);
        return new ResponseEntity<>(obj, HttpStatus.OK);
    }

}

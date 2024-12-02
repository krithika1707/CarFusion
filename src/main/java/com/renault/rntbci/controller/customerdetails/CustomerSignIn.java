package com.renault.rntbci.controller.customerdetails;
import com.renault.rntbci.dbservice.customerdetails.entity.CustomerDetails;
import com.renault.rntbci.service.customerdetailsservice.CustomerDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/users/signin")
@CrossOrigin("*")
public class CustomerSignIn {
    @Autowired
    CustomerDetailsService customerDetailsService;

    @PostMapping("/add")
    public ResponseEntity<CustomerDetails> post_Customer_Datas(@RequestBody CustomerDetails details) {
        return new ResponseEntity<>(customerDetailsService.postCustomerDetails(details),HttpStatus.ACCEPTED);
    }
    }

package com.renault.rntbci.controller.customerdetails;

import com.renault.rntbci.common.CustomerDAO;
import com.renault.rntbci.dbservice.customerdetails.entity.CustomerDetails;
import com.renault.rntbci.service.customerdetailsservice.CustomerDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users/login")
@CrossOrigin("*")

public class CustomerLogIn {
    @Autowired
    CustomerDetailsService detailsService;
    @PostMapping("/go")
    public ResponseEntity<Object> checkUsers(@RequestBody CustomerDAO dao) {
        try {
            CustomerDetails details1 = detailsService.checkLogins(dao);
            if (details1 != null) {
                return new ResponseEntity<>(details1,HttpStatus.ACCEPTED);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_GATEWAY);
        }
    }

}
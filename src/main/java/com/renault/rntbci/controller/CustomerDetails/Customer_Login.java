package com.renault.rntbci.controller.CustomerDetails;

import com.renault.rntbci.common.CustomerDetailsDao;
import com.renault.rntbci.dbservice.customerservice.entity.CustomerDetails;
import com.renault.rntbci.service.customerdetails.CustomerLoginServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/login")
@CrossOrigin("*")
public class Customer_Login {

    @Autowired
    CustomerLoginServices customerLoginServices;

    @PostMapping("/customerlogin")
    public ResponseEntity<Object> customerLogin(@RequestBody CustomerDetailsDao customerDetailsDao) {
        try{
            CustomerDetails cus=customerLoginServices.customerLogin(customerDetailsDao);
            return new ResponseEntity<>(cus,HttpStatus.OK);
        }
        catch (Exception ex){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

    }

}

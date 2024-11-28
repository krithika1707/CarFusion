package com.example.Car_Fusion.Controller;

import com.example.Car_Fusion.DAO.Customer_DAO;
import com.example.Car_Fusion.Entity.Customer_Details;
import com.example.Car_Fusion.ModelAttribute.Log_In_Datas;
import com.example.Car_Fusion.Service.Customer_Details_Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/users/login")
@CrossOrigin("*")

public class Customer_Details_Log_In {
    @Autowired
    Customer_Details_Service detailsService;
    @PostMapping("/go")
    public ResponseEntity<Object> checkUsers(@RequestBody Customer_DAO dao) {
        try {
            Customer_Details details1 = detailsService.checkLogins(dao);
            if (details1 != null) {
                return new ResponseEntity<>(HttpStatus.ACCEPTED);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_GATEWAY);
        }
    }

}
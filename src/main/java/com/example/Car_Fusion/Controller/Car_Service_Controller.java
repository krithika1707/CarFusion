package com.example.Car_Fusion.Controller;

import com.example.Car_Fusion.Entity.Car_service;
import com.example.Car_Fusion.Service.Car_Service_Service;
import jakarta.persistence.Entity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/car_services")
@CrossOrigin("*")
public class Car_Service_Controller
{
    @Autowired
    Car_Service_Service service1;
    @PostMapping("/add")
    public ResponseEntity<Object>addServices(@RequestBody Car_service carService)
    {
        return new ResponseEntity<>(service1.addServices(carService), HttpStatus.ACCEPTED);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Car_service>>getAllServices()
    {
        return new ResponseEntity<>(service1.getAllDats(),HttpStatus.ACCEPTED);
    }

}

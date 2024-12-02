package com.example.car_fusion.Controller;

import com.example.car_fusion.Entity.Car_Service;
import com.example.car_fusion.Service.Car_Service_Services;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/carservice")
@CrossOrigin("*")
public class Car_Service_Controller {

    @Autowired
    Car_Service_Services carServiceServices;

    @PostMapping("/saveservicebooking")
    public ResponseEntity<Car_Service> savebooking(@RequestBody Car_Service carService){
        System.out.println("controller");
        Car_Service service=carServiceServices.savebooking(carService);
        return new ResponseEntity<>(service, HttpStatus.OK);
    }

}

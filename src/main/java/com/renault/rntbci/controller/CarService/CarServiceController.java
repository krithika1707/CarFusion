package com.renault.rntbci.controller.CarService;

import com.renault.rntbci.dbservice.carservice.entity.CarService;
import com.renault.rntbci.service.carservice.CarServiceServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/carservice")
@CrossOrigin("*")
public class CarServiceController {

    @Autowired
    CarServiceServices carServiceServices;

    @PostMapping("/saveservicebooking")
    public ResponseEntity<CarService> savebooking(@RequestBody CarService carService){
        System.out.println("controller");
        CarService service=carServiceServices.savebooking(carService);
        return new ResponseEntity<>(service, HttpStatus.OK);
    }

}

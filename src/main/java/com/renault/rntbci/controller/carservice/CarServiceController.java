package com.renault.rntbci.controller.carservice;//package com.renault.rntbci.controller.carservice;
//import com.renault.rntbci.dbservice.carservice.entity.CarService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//import java.util.List;


import com.renault.rntbci.dbservice.carservice.entity.CarService;
import com.renault.rntbci.service.carservice.CarServiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/car_services")
@CrossOrigin("*")
public class CarServiceController
{
    @Autowired
    CarServiceService service;
    @PostMapping("/add")
    public ResponseEntity<Object> addServices(@RequestBody CarService service1)
    {
        return new ResponseEntity<>(service.addServices(service1), HttpStatus.ACCEPTED);
    }

    @GetMapping("/all")
    public ResponseEntity<List<CarService>>getAllServices()
    {
        return new ResponseEntity<>(service.getAllDats(),HttpStatus.ACCEPTED);
    }

    @GetMapping("/bookinghistory")
    public ResponseEntity<CarService> getCarServiceBookings(@RequestParam long id)
    {
        System.out.println(id);
        return new ResponseEntity<>(service.getServiceBookings(id),HttpStatus.ACCEPTED);
    }
}

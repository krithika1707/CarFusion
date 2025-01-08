package com.renault.rntbci.controller.carresale.bookings;

import com.renault.rntbci.dbservice.carresale.entity.CarResaleBookings;
import com.renault.rntbci.service.carresalebookings.CarResaleBookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/carresale/booking")
@CrossOrigin("*")
public class CarResaleBookingController
{
    @Autowired
    CarResaleBookingService carResaleBookingService;
@PostMapping("/add")
public ResponseEntity<CarResaleBookings> addBookings(@RequestBody CarResaleBookings car)
{
return new ResponseEntity<>(carResaleBookingService.addBookings(car),HttpStatus.ACCEPTED);
}

    @PutMapping("/change")
    public ResponseEntity<Object>changeDatas(@RequestParam List<Long> resales)
    {
        System.out.println("came!!!!!");
        System.out.println(resales);
        return new ResponseEntity<>(carResaleBookingService.changeDatas(resales),HttpStatus.ACCEPTED);
    }

    @GetMapping("/bookings/{id}")
    public ResponseEntity<List<CarResaleBookings>> getCarResaleBookings(@PathVariable("id") long id)
    {
        return new ResponseEntity<>(carResaleBookingService.getCarResaleBookings(id),HttpStatus.ACCEPTED);
    }
}

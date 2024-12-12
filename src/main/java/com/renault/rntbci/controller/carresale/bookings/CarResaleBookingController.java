package com.renault.rntbci.controller.carresale.bookings;

import com.renault.rntbci.dbservice.carresale.entity.CarResaleBookings;
import com.renault.rntbci.service.carresalebookings.CarResaleBookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
}

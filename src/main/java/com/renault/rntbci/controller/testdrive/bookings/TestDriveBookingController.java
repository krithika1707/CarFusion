package com.renault.rntbci.controller.testdrive.bookings;

import com.renault.rntbci.dbservice.testdrive.entity.TestDrive;
import com.renault.rntbci.dbservice.testdrive.entity.TestDriveBooking;
import com.renault.rntbci.service.testdrivebooking.TestDriveBookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/testdrive/booking")
@CrossOrigin("*")
public class TestDriveBookingController
{
    @Autowired
    TestDriveBookingService testDriveBookingService;
    @PostMapping("/book")
    public ResponseEntity<TestDriveBooking> booking(@RequestBody TestDriveBooking testDriveBooking)
    {
        System.out.println("Entered testdrive");
        return new ResponseEntity<>(testDriveBookingService.addDatas(testDriveBooking), HttpStatus.ACCEPTED);
    }

    @GetMapping("/bookings/{id}")
    public ResponseEntity<TestDriveBooking> getTestDriveBookings(@PathVariable("id") long id)
    {
        return new ResponseEntity<>(testDriveBookingService.getTestDriveBookings(id),HttpStatus.ACCEPTED);
    }
}

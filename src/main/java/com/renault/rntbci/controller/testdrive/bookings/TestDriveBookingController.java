package com.renault.rntbci.controller.testdrive.bookings;

import com.renault.rntbci.dbservice.testdrive.entity.TestDrive;
import com.renault.rntbci.dbservice.testdrive.entity.TestDriveBooking;
import com.renault.rntbci.service.testdrivebooking.TestDriveBookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
        return new ResponseEntity<>(testDriveBookingService.addDatas(testDriveBooking), HttpStatus.ACCEPTED);
    }
}

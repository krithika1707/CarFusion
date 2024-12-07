package com.renault.rntbci.controller.testdrive;

import com.renault.rntbci.dbservice.testdrive.entity.TestDriveBooking;
import com.renault.rntbci.dbservice.testdrive.entity.TestDriveModels;
import com.renault.rntbci.service.testdrive.TestdriveService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/testdrive")
public class TestdriveController {

    @Autowired
    TestdriveService testdriveService;

    @PostMapping("/add")
    public ResponseEntity<TestDriveModels> addtestdrive(@RequestBody TestDriveModels testDriveModels){
        TestDriveModels t=testdriveService.addtestdrive(testDriveModels);
        return new ResponseEntity<>(t, HttpStatus.OK);
    }
    @GetMapping("/getbyid")
    public ResponseEntity<List<TestDriveModels>> getById(@RequestParam("ids") long testid){
        List<TestDriveModels> tobj=testdriveService.getById(testid);
        return new ResponseEntity<>(tobj,HttpStatus.OK);
    }

    @PostMapping("/booking")
    public ResponseEntity<TestDriveBooking> saveBooking(@RequestBody TestDriveBooking book){
        TestDriveBooking tobj=testdriveService.saveBooking(book);
        return new ResponseEntity<>(tobj,HttpStatus.OK);
    }

}

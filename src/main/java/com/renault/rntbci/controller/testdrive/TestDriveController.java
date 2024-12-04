package com.renault.rntbci.controller.testdrive;
import com.renault.rntbci.dbservice.testdrive.entity.TestDrive;
import com.renault.rntbci.service.testdrive.TestDriveService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/testdrive")
@CrossOrigin("*")
public class TestDriveController
{
    @Autowired
    TestDriveService testDriveService;
    @GetMapping("/all")
    public ResponseEntity<List<TestDrive>> getAllDatas()
    {
return new ResponseEntity<>(testDriveService.getAll(),HttpStatus.ACCEPTED);
    }
    @PostMapping("/add")
    public ResponseEntity<TestDrive> postData(@RequestBody TestDrive testDrive)
    {
        return new ResponseEntity<>(testDriveService.addDatas(testDrive),HttpStatus.ACCEPTED);
    }
    @GetMapping("/search")
    public ResponseEntity<List<TestDrive>> getSearches(@RequestParam long ids)
    {
        return new ResponseEntity<>(testDriveService.getSegments(ids),HttpStatus.ACCEPTED);
    }
    //dummy

}

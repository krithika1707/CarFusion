package com.renault.rntbci.controller.testdrive.segments;

import com.renault.rntbci.dbservice.testdricesegments.entity.TestDriveSegments;
import com.renault.rntbci.service.testdrivesegments.TestDriveSegmentsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/testdrive/segments")
@CrossOrigin("*")
public class TestDriveSegmentController
{
    @Autowired
    TestDriveSegmentsService testDriveSegmentsService;
    @PostMapping("/add")
    public ResponseEntity<TestDriveSegments> adddatas(@RequestBody TestDriveSegments segments)
    {
        return new ResponseEntity<>(testDriveSegmentsService.addDatas(segments), HttpStatus.ACCEPTED);
    }
    @GetMapping("/all")
    public ResponseEntity<List<TestDriveSegments>> getAll()
    {
        return new ResponseEntity<>(testDriveSegmentsService.getAllSegments(), HttpStatus.ACCEPTED);
    }

}

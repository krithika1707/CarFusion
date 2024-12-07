package com.renault.rntbci.controller.segments;

import com.renault.rntbci.dbservice.segment.entity.Segments;
import com.renault.rntbci.service.segment.SegmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.Segment;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/segments")
public class SegmentController {

    @Autowired
    SegmentService segmentService;

    @PostMapping("/add")
    public ResponseEntity<Segments> addSegments(@RequestBody Segments segment){
        Segments s=segmentService.addSegments(segment);
        return new ResponseEntity<>(s, HttpStatus.OK);
    }

    @GetMapping("/get")
    public ResponseEntity<List<Segments>> getSegments(){
        List<Segments> l=segmentService.getSegments();
        return new ResponseEntity<>(l,HttpStatus.OK);
    }


}

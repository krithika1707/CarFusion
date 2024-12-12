package com.renault.rntbci.controller.carresale.segments;


import com.renault.rntbci.dbservice.carresalesegments.entity.CarResaleSegment;
import com.renault.rntbci.service.carresalesegments.CarResaleSegmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/car_resale_segement")
@CrossOrigin("*")
public class CarResaleSegmentController
{
    @Autowired
    CarResaleSegmentService carResaleSegmentService;
@PostMapping("/add")
    public ResponseEntity<CarResaleSegment>addSegment(@RequestBody CarResaleSegment segment)
{
   return new ResponseEntity<>(carResaleSegmentService.addSegement(segment), HttpStatus.ACCEPTED);
}
}

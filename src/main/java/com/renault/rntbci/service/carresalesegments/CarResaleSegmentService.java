package com.renault.rntbci.service.carresalesegments;

import com.renault.rntbci.controller.carresale.segments.CarResaleSegmentController;
import com.renault.rntbci.dbservice.carresalesegments.entity.CarResaleSegment;
import com.renault.rntbci.dbservice.carresalesegments.repository.ICarResaleSegmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CarResaleSegmentService implements ICarResaleSegmentImpl
{
    @Autowired
    ICarResaleSegmentRepository iCarResaleSegmentRepository;
    @Override
    public CarResaleSegment addSegement(CarResaleSegment segment) {
        return iCarResaleSegmentRepository.save(segment);
    }

}

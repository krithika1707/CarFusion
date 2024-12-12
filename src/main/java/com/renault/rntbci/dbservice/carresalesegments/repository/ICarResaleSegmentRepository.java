package com.renault.rntbci.dbservice.carresalesegments.repository;

import com.renault.rntbci.dbservice.carresalesegments.entity.CarResaleSegment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICarResaleSegmentRepository extends JpaRepository<CarResaleSegment,Long> {
}

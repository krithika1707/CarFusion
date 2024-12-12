package com.renault.rntbci.dbservice.carresale.repository;

import com.renault.rntbci.dbservice.carresale.entity.CarResaleBookings;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICarResaleBookingRepository extends JpaRepository<CarResaleBookings,Long> {
}

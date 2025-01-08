package com.renault.rntbci.dbservice.carservice.repository;


import com.renault.rntbci.dbservice.carservice.entity.CarService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ICarServiceRepository extends JpaRepository<CarService,Long> {
    @Query("select cr from CarService cr where cr.details.customer_id=:id")
    Optional<CarService> findByCustomerId(long id);
}

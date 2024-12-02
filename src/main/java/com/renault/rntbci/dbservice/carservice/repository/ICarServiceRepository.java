package com.renault.rntbci.dbservice.carservice.repository;


import com.renault.rntbci.dbservice.carservice.entity.CarService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICarServiceRepository extends JpaRepository<CarService,Long> {
}

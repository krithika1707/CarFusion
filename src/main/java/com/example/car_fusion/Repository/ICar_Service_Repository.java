package com.example.car_fusion.Repository;

import com.example.car_fusion.Entity.Car_Service;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICar_Service_Repository extends JpaRepository<Car_Service,Long>{

}

package com.example.Car_Fusion.Repository;


import com.example.Car_Fusion.Entity.Car_service;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICar_Service_Repository extends JpaRepository<Car_service,Long> {
}

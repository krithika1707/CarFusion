package com.example.Car_Fusion.Service;
import com.example.Car_Fusion.Entity.Car_service;
import com.example.Car_Fusion.Entity.Customer_Details;
import com.example.Car_Fusion.Repository.ICar_Service_Repository;
import com.example.Car_Fusion.Repository.ICustomer_Details_Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class Car_Service_Service {
    @Autowired
    ICar_Service_Repository carServiceRepository;
    @Autowired
    ICustomer_Details_Repository customer_details_repository;
    public Car_service addServices(Car_service service)
    {
        long ids=service.getDetails().getCustomer_id();
        Optional<Customer_Details> details=customer_details_repository.findById(ids);
        service.setDetails(details.get());
        return carServiceRepository.save(service);
    }
    public List<Car_service>getAllDats()
    {
        return carServiceRepository.findAll();
    }
}

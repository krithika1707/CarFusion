package com.example.car_fusion.Service;

import com.example.car_fusion.Entity.Car_Service;
import com.example.car_fusion.Entity.Customer_Details;
import com.example.car_fusion.Repository.ICar_Service_Repository;
import com.example.car_fusion.Repository.ICustomer_Details_Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class Car_Service_Services {
    @Autowired
    ICar_Service_Repository carservicerepo;

    @Autowired
    ICustomer_Details_Repository customerrepo;

    public Car_Service savebooking(Car_Service carService) {

        long cid=carService.getCustomerDetails().getCustomer_id();
        System.out.println(cid);
        Customer_Details customers=customerrepo.findById(cid).get();
        System.out.println(customers);
        carService.setCustomerDetails(customers);
        return carservicerepo.save(carService);

    }
}

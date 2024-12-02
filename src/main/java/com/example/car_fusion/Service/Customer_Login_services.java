package com.example.car_fusion.Service;

import com.example.car_fusion.Entity.Customer_Details;
import com.example.car_fusion.DAO.Customer_details_DAO;
import com.example.car_fusion.Repository.ICustomer_Details_Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class Customer_Login_services {
    @Autowired
    ICustomer_Details_Repository customerDetailsRepository;


    public Customer_Details customerLogin(Customer_details_DAO customerDetailsDao) {
        Customer_Details d = customerDetailsRepository.findByCustomer_mail_id(customerDetailsDao.getCustomer_mail_id());
        if (d != null && d.getPassword().equals(customerDetailsDao.getPassword())) {
           return d;
        }
        else{
            throw new RuntimeException("Invalid username or password");
        }

    }


}
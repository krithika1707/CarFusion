package com.example.Car_Fusion.Service;

import com.example.Car_Fusion.DAO.Customer_DAO;
import com.example.Car_Fusion.Entity.Customer_Details;
import com.example.Car_Fusion.Repository.ICustomer_Details_Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Customer_Details_Service {
    @Autowired
    ICustomer_Details_Repository iCustomerDetailsRepository;

    public Customer_Details postCustomerDetails(Customer_Details details)
    {
        return iCustomerDetailsRepository.save(details);
    }
    public List<Customer_Details>getAllDats()
    {
        return iCustomerDetailsRepository.findAll();
    }
    public Customer_Details checkLogins(Customer_DAO customerDao)
    {
      return  iCustomerDetailsRepository.findByCustomerMailId(customerDao.getUsername(), customerDao.getPassword());
    }
}

package com.renault.rntbci.service.customerdetails;

import com.renault.rntbci.dbservice.customerservice.entity.CustomerDetails;
import com.renault.rntbci.common.CustomerDetailsDao;
import com.renault.rntbci.dbservice.customerservice.repository.ICustomerDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerLoginServices implements ICustomerLoginImpl{
    @Autowired
    ICustomerDetailsRepository customerDetailsRepository;


    public CustomerDetails customerLogin(CustomerDetailsDao customerDetailsDao) {
        CustomerDetails d = customerDetailsRepository.findByCustomer_mail_id(customerDetailsDao.getCustomer_mail_id());
        if (d != null && d.getPassword().equals(customerDetailsDao.getPassword())) {
           return d;
        }
        else{
            throw new RuntimeException("Invalid username or password");
        }

    }


}
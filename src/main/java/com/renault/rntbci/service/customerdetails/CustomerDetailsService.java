package com.renault.rntbci.service.customerdetails;

import com.renault.rntbci.dbservice.customerservice.entity.CustomerDetails;
import com.renault.rntbci.dbservice.customerservice.repository.ICustomerDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerDetailsService{


    @Autowired
    ICustomerDetailsRepository customerDetailsRepository;

    public CustomerDetails createCustomer(CustomerDetails customerDetails) {
        return customerDetailsRepository.save(customerDetails);
    }
}

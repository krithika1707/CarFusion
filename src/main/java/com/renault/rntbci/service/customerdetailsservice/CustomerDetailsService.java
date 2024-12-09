package com.renault.rntbci.service.customerdetailsservice;

import com.renault.rntbci.common.CustomerDAO;
import com.renault.rntbci.dbservice.customerdetails.entity.CustomerDetails;
import com.renault.rntbci.dbservice.customerdetails.repository.ICustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerDetailsService implements ICustomerDetailsImpl {
    @Autowired
    ICustomerRepository iCustomerDetailsRepository;

    @Override
    public CustomerDetails postCustomerDetails(CustomerDetails details)
    {
        return iCustomerDetailsRepository.save(details);
    }
    @Override
    public List<CustomerDetails>getAllDats()
    {
        return iCustomerDetailsRepository.findAll();
    }
    @Override
    public CustomerDetails checkLogins(CustomerDAO customerDao)
    {
      return  iCustomerDetailsRepository.findByCustomerMailId(customerDao.getUsername(), customerDao.getPassword());
    }
}

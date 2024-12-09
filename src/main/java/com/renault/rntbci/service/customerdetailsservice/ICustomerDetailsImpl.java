package com.renault.rntbci.service.customerdetailsservice;

import com.renault.rntbci.common.CustomerDAO;
import com.renault.rntbci.dbservice.customerdetails.entity.CustomerDetails;

import java.util.List;

public interface ICustomerDetailsImpl {

    public CustomerDetails postCustomerDetails(CustomerDetails details);
    public List<CustomerDetails> getAllDats();
    public CustomerDetails checkLogins(CustomerDAO customerDao);
}

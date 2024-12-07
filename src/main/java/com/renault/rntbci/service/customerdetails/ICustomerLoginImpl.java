package com.renault.rntbci.service.customerdetails;

import com.renault.rntbci.common.CustomerDetailsDao;
import com.renault.rntbci.dbservice.customerservice.entity.CustomerDetails;

public interface ICustomerLoginImpl {
    CustomerDetails customerLogin(CustomerDetailsDao customerDetailsDao);
}

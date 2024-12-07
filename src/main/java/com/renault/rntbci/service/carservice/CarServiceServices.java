package com.renault.rntbci.service.carservice;

import com.renault.rntbci.dbservice.carservice.entity.CarService;
import com.renault.rntbci.dbservice.customerservice.entity.CustomerDetails;
import com.renault.rntbci.dbservice.carservice.repository.ICarServiceRepository;
import com.renault.rntbci.dbservice.customerservice.repository.ICustomerDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CarServiceServices implements ICarserviceImpl{
    @Autowired
    ICarServiceRepository carservicerepo;

    @Autowired
    ICustomerDetailsRepository customerrepo;

    @Override
    public CarService savebooking(CarService carService) {
        long cid=carService.getCustomerDetails().getCustomer_id();
          System.out.println(cid);
        CustomerDetails customers=customerrepo.findById(cid).get();
        System.out.println(customers);
        carService.setCustomerDetails(customers);
        return carservicerepo.save(carService);
    }
}

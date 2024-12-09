package com.renault.rntbci.service.carservice;

import com.renault.rntbci.dbservice.carservice.entity.CarService;
import com.renault.rntbci.dbservice.customerdetails.entity.CustomerDetails;

import java.util.List;
import java.util.Optional;

public interface ICarServiceImpl {
    public CarService addServices(CarService service);
    public List<CarService> getAllDats();
}

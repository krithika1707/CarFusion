package com.renault.rntbci.service.carservice;
import com.renault.rntbci.dbservice.carservice.entity.CarService;
import com.renault.rntbci.dbservice.carservice.repository.ICarServiceRepository;
import com.renault.rntbci.dbservice.customerdetails.entity.CustomerDetails;
import com.renault.rntbci.dbservice.customerdetails.repository.ICustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
@Service
public class CarServiceService implements ICarServiceImpl{

    @Autowired
    ICarServiceRepository carServiceRepository;
    @Autowired
    ICustomerRepository customer_details_repository;
    @Override
    public CarService addServices(CarService service)
    {
       // long ids=service.getDetails().getCustomer_id();
        //Optional<Customer_Details> details=customer_details_repository.findById(ids);
        //service.setDetails(details.get());
        //return carServiceRepository.save(service);

        ////

        long ids = service.getDetails().getCustomer_id();

        Optional<CustomerDetails> details = customer_details_repository.findById(ids);

        if (details.isPresent()) {
            service.setDetails(details.get());
            return carServiceRepository.save(service);
        } else {
            // If no customer details are found, handle the error appropriately
            throw new RuntimeException("Customer with ID " + ids + " not found.");
        }
        ///
    }
    @Override
    public List<CarService>getAllDats()
    {
        return carServiceRepository.findAll();
    }

    public CarService getServiceBookings(long id)
    {
        Optional<CarService> his=carServiceRepository.findByCustomerId(id);
        if(his.isPresent()){
            System.out.println("hii");
            return his.get();
        }
        else{
            throw new RuntimeException("This Customer does not have any history");
        }

    }

}

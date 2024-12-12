package com.renault.rntbci.service.carresalebookings;

import com.renault.rntbci.dbservice.carresale.entity.CarResale;
import com.renault.rntbci.dbservice.carresale.entity.CarResaleBookings;
import com.renault.rntbci.dbservice.carresale.repository.ICarResaleBookingRepository;
import com.renault.rntbci.dbservice.carresale.repository.ICarResaleRepository;
import com.renault.rntbci.dbservice.customerdetails.entity.CustomerDetails;
import com.renault.rntbci.dbservice.customerdetails.repository.ICustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CarResaleBookingService implements ICarResaleBookingImpl
{
    @Autowired
    ICarResaleBookingRepository iCarResaleBooking;
    @Autowired
    ICarResaleRepository iCarResaleRepository;
    @Autowired
    ICustomerRepository iCustomerRepository;
    @Override
    public CarResaleBookings addBookings(CarResaleBookings bookings) {
        Optional<CustomerDetails> details=iCustomerRepository.findById(bookings.getDetails().getCustomer_id());
        Optional<CarResale> resale=iCarResaleRepository.findById(bookings.getResale().getResale_id());
        if(details.isPresent() && resale.isPresent())
        {
            bookings.setResale(resale.get());
            bookings.setDetails(details.get());
            return iCarResaleBooking.save(bookings);
        }
        else{
            throw new RuntimeException("Error");
        }
    }


}

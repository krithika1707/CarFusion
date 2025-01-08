package com.renault.rntbci.service.carresalebookings;

import com.renault.rntbci.dbservice.carresale.entity.CarResale;
import com.renault.rntbci.dbservice.carresale.entity.CarResaleBookings;
import com.renault.rntbci.dbservice.carresale.repository.ICarResaleBookingRepository;
import com.renault.rntbci.dbservice.carresale.repository.ICarResaleRepository;
import com.renault.rntbci.dbservice.customerdetails.entity.CustomerDetails;
import com.renault.rntbci.dbservice.customerdetails.repository.ICustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
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


    public String changeDatas(List<Long> resales)
    {
        if(resales.size()==0)
        {
            return "none";
        }
        for(Long car:resales)
        {
            Optional<CarResale> carResaleOpt = iCarResaleRepository.findById(car);
            if (carResaleOpt.isPresent()) {
                CarResale carResale = carResaleOpt.get();
                carResale.setSelected("1");
                System.out.println("CarResale: " + carResale.getCar_name());
                iCarResaleRepository.save(carResale);
            } else {
                System.out.println("CarResale with ID " + car + " not found.");
                return "none";
            }
            //car.setSelected(String.valueOf(1));
            // iCarResaleRepository.save(car);
        }
        return "Changed!!!!!";
    }

    public List<CarResaleBookings> getBookings() {
        return iCarResaleBooking.findAll();
    }

    public List<CarResaleBookings> getCarResaleBookings(long id) {
        List<CarResaleBookings> list = new ArrayList<>();
        for (CarResaleBookings carResaleBookings : getBookings()) {
            if (carResaleBookings.getDetails().getCustomer_id()==id) {
                list.add(carResaleBookings);
            }
        }
        if(list.isEmpty()){
            throw new RuntimeException("Id not found");
        }
        else{
            return list;
        }
    }

}

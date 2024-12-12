package com.renault.rntbci.service.carresale;

import com.renault.rntbci.dbservice.carresale.entity.CarResale;
import com.renault.rntbci.dbservice.carresale.repository.ICarResaleRepository;
import com.renault.rntbci.dbservice.carresalesegments.entity.CarResaleSegment;
import com.renault.rntbci.dbservice.carresalesegments.repository.ICarResaleSegmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CarResaleService implements ICarResaleImpl
{
@Autowired
    ICarResaleRepository carResaleRepository;
@Autowired
    ICarResaleSegmentRepository iCarResaleSegmentRepository;
    @Override
    public List<CarResale> getAllModels() {
        return carResaleRepository.findAll();
    }

    @Override
    public CarResale addModels(CarResale resale) {
        Optional<CarResaleSegment> service=iCarResaleSegmentRepository.findById(resale.getSegment().getCar_segment_id());
        if(service.isPresent()){
            resale.setSegment(service.get());
            return carResaleRepository.save(resale);
        }
        else{
            throw  new RuntimeException("Error!!!!");
        }
      }

    @Override
    public List<CarResale> searchByPrice(long price) {
        return carResaleRepository.searchByPrices(price);
    }

    @Override
    public List<CarResale> searchBySegment(long id) {
        return carResaleRepository.searchBySegments(id);
    }

    @Override
    public List<CarResale> searchByPrice_Segment(long price, long id) {
        return carResaleRepository.searchByPrices_Segments(price, id);
    }
}

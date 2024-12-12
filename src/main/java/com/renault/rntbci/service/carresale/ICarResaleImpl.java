package com.renault.rntbci.service.carresale;

import com.renault.rntbci.dbservice.carresale.entity.CarResale;

import java.util.List;

public interface ICarResaleImpl {
public List<CarResale>getAllModels();
public CarResale addModels(CarResale resale);
public List<CarResale>searchByPrice(long price);
public List<CarResale>searchBySegment(long id);
public List<CarResale>searchByPrice_Segment(long price,long id);
}

package com.renault.rntbci.dbservice.carresale.repository;

import com.renault.rntbci.dbservice.carresale.entity.CarResale;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ICarResaleRepository extends JpaRepository<CarResale,Long>
{
@Query("select cr from CarResale  cr where cr.segment.car_segment_id=:id")
List<CarResale>searchBySegments(long id);

@Query("select cr from CarResale  cr where cr.car_price<=:price")
List<CarResale>searchByPrices(long price);

@Query("select cr from CarResale  cr where cr.car_price<=:price and cr.segment.car_segment_id=:id")
List<CarResale>searchByPrices_Segments(long price,long id);

}

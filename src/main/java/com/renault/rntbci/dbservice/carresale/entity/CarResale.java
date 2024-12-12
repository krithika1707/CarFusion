package com.renault.rntbci.dbservice.carresale.entity;

import com.renault.rntbci.dbservice.carresalesegments.entity.CarResaleSegment;
import jakarta.persistence.*;

@Entity
public class CarResale {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long resale_id;
    String car_name;
    String car_image;
    long car_price;
    String fuel_type;
    String kilometers;
    String slots[];

    public String[] getSlots() {
        return slots;
    }

    public void setSlots(String[] slots) {
        this.slots = slots;
    }

    @ManyToOne(cascade = CascadeType.ALL)
@JoinColumn(name = "segment_id")
CarResaleSegment segment;

    public CarResaleSegment getSegment()
    {
        return segment;
    }
    public void setSegment(CarResaleSegment segment)
    {
        this.segment = segment;
    }
    public long getResale_id()
    {
        return resale_id;
    }

    public void setResale_id(long resale_id)
    {
        this.resale_id = resale_id;
    }

    public String getCar_name()
    {
        return car_name;
    }

    public void setCar_name(String car_name)
    {
        this.car_name = car_name;
    }

    public String getCar_image()
    {
        return car_image;
    }

    public void setCar_image(String car_image)
    {
        this.car_image = car_image;
    }

    public long getCar_price()
    {
        return car_price;
    }

    public void setCar_price(long car_price)
    {
        this.car_price = car_price;
    }

    public String getFuel_type()
    {
        return fuel_type;
    }

    public void setFuel_type(String fuel_type)
    {
        this.fuel_type = fuel_type;
    }

    public String getKilometers()
    {
        return kilometers;
    }

    public void setKilometers(String kilometers)
    {
        this.kilometers = kilometers;
    }
}

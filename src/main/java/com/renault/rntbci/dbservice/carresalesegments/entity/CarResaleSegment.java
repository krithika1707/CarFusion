package com.renault.rntbci.dbservice.carresalesegments.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class CarResaleSegment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long car_segment_id;
    String segment;

    public long getCar_segment_id() {
        return car_segment_id;
    }

    public void setCar_segment_id(long car_segment_id) {
        this.car_segment_id = car_segment_id;
    }

    public String getSegment() {
        return segment;
    }

    public void setSegment(String segment) {
        this.segment = segment;
    }
}

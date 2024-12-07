package com.renault.rntbci.dbservice.testdrive.entity;

import com.renault.rntbci.dbservice.segment.entity.Segments;
import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
public class TestDriveModels {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long test_drive_id;
   private String car_name;
   private String description;
   private String car_image;
   private String[] slots;
   @ManyToOne
   @JoinColumn(name="segment_id")
   private Segments segments;

    public long getTest_drive_id() {
        return test_drive_id;
    }

    public void setTest_drive_id(long test_drive_id) {
        this.test_drive_id = test_drive_id;
    }

    public String getCar_name() {
        return car_name;
    }

    public void setCar_name(String car_name) {
        this.car_name = car_name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCar_image() {
        return car_image;
    }

    public void setCar_image(String car_image) {
        this.car_image = car_image;
    }

    public String[] getSlots() {
        return slots;
    }

    public void setSlots(String[] slots) {
        this.slots = slots;
    }

    public Segments getSegments() {
        return segments;
    }

    public void setSegments(Segments segments) {
        this.segments = segments;
    }


}

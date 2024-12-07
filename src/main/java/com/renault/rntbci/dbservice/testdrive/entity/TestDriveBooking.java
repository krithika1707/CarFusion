package com.renault.rntbci.dbservice.testdrive.entity;

import com.renault.rntbci.dbservice.customerservice.entity.CustomerDetails;
import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
public class TestDriveBooking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long testdrivebooking_id;
    @OneToOne
    @JoinColumn(name="test_drive_id")
     TestDriveModels testDriveModels;
    @OneToOne
    CustomerDetails customerDetails;
    LocalDateTime date_time;


    public long getTestdrivebooking_id() {
        return testdrivebooking_id;
    }

    public void setTestdrivebooking_id(long testdrivebooking_id) {
        this.testdrivebooking_id = testdrivebooking_id;
    }

    public TestDriveModels getTestDriveModels() {
        return testDriveModels;
    }

    public void setTestDriveModels(TestDriveModels testDriveModels) {
        this.testDriveModels = testDriveModels;
    }

    public CustomerDetails getCustomerDetails() {
        return customerDetails;
    }

    public void setCustomerDetails(CustomerDetails customerDetails) {
        this.customerDetails = customerDetails;
    }

    public LocalDateTime getDate_time() {
        return date_time;
    }

    public void setDate_time(LocalDateTime date_time) {
        this.date_time = date_time;
    }
}

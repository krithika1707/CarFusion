package com.renault.rntbci.dbservice.testdrive.entity;

import com.renault.rntbci.dbservice.customerdetails.entity.CustomerDetails;
import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
public class TestDriveBooking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long booking_id;
    @OneToOne
    @JoinColumn(name = "testdrive_id")
    TestDrive testDrive;
    LocalDateTime dateTime;
    @OneToOne
    @JoinColumn(name="customer_id")
    CustomerDetails details;

    public LocalDateTime getDateTime() {
        return dateTime;
    }

    public void setDateTime(LocalDateTime dateTime) {
        this.dateTime = dateTime;
    }

    public long getBooking_id()
    {
        return booking_id;
    }

    public void setBooking_id(long booking_id)
    {
        this.booking_id = booking_id;
    }

    public TestDrive getTestDrive()
    {
        return testDrive;
    }

    public void setTestDrive(TestDrive testDrive)
    {
        this.testDrive = testDrive;
    }

    public CustomerDetails getDetails()
    {
        return details;
    }

    public void setDetails(CustomerDetails details)
    {
        this.details = details;
    }
}

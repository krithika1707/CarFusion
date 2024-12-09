package com.renault.rntbci.service.testdrivebooking;

import com.renault.rntbci.dbservice.customerdetails.entity.CustomerDetails;
import com.renault.rntbci.dbservice.testdrive.entity.TestDrive;
import com.renault.rntbci.dbservice.testdrive.entity.TestDriveBooking;

import java.util.Optional;

public interface ITestDriveBookingImpl
{
    public TestDriveBooking addDatas(TestDriveBooking testDriveBooking);
}

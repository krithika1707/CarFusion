package com.renault.rntbci.service.testdrive;

import com.renault.rntbci.dbservice.testdrive.entity.TestDriveBooking;
import com.renault.rntbci.dbservice.testdrive.entity.TestDriveModels;

import java.util.List;

public interface ITestDriveImpl {
    TestDriveModels addtestdrive(TestDriveModels testDriveModels);
    List<TestDriveModels> getById(long testid);
    TestDriveBooking saveBooking(TestDriveBooking book);
}

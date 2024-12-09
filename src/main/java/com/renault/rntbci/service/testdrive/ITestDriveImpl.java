package com.renault.rntbci.service.testdrive;

import com.renault.rntbci.dbservice.testdricesegments.entity.TestDriveSegments;
import com.renault.rntbci.dbservice.testdrive.entity.TestDrive;

import java.util.List;
import java.util.Optional;

public interface ITestDriveImpl
{
    public TestDrive addDatas(TestDrive testDrive);
    public List<TestDrive> getAll();
    public List<TestDrive>getSegments(long drive);
}

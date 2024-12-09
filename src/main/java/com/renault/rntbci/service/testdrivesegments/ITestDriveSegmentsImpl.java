package com.renault.rntbci.service.testdrivesegments;

import com.renault.rntbci.dbservice.testdricesegments.entity.TestDriveSegments;

import java.util.List;

public interface ITestDriveSegmentsImpl
{
    public TestDriveSegments addDatas(TestDriveSegments testDriveSegments);
    public List<TestDriveSegments> getAllSegments();
}

package com.renault.rntbci.service.testdrivesegments;

import com.renault.rntbci.dbservice.testdricesegments.entity.TestDriveSegments;
import com.renault.rntbci.dbservice.testdricesegments.repository.ITestDriveSegmentsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TestDriveSegmentsService
{
    @Autowired
    ITestDriveSegmentsRepository testDriveSegmentsRepository;
    public TestDriveSegments addDatas(TestDriveSegments testDriveSegments)
    {
        return testDriveSegmentsRepository.save(testDriveSegments);
    }
}

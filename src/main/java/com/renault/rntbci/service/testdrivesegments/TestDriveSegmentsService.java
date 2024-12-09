package com.renault.rntbci.service.testdrivesegments;

import com.renault.rntbci.dbservice.testdricesegments.entity.TestDriveSegments;
import com.renault.rntbci.dbservice.testdricesegments.repository.ITestDriveSegmentsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class TestDriveSegmentsService implements ITestDriveSegmentsImpl
{
    @Autowired
    ITestDriveSegmentsRepository testDriveSegmentsRepository;
    @Override
    public TestDriveSegments addDatas(TestDriveSegments testDriveSegments)
    {
        return testDriveSegmentsRepository.save(testDriveSegments);
    }
    @Override
    public List<TestDriveSegments> getAllSegments()
    {
       return testDriveSegmentsRepository.findAll();
    }
}

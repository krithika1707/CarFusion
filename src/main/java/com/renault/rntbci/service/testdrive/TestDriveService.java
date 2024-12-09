package com.renault.rntbci.service.testdrive;

import com.renault.rntbci.dbservice.testdricesegments.entity.TestDriveSegments;
import com.renault.rntbci.dbservice.testdricesegments.repository.ITestDriveSegmentsRepository;
import com.renault.rntbci.dbservice.testdrive.entity.TestDrive;
import com.renault.rntbci.dbservice.testdrive.repository.ITestDriveRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TestDriveService implements ITestDriveImpl{
    @Autowired
    ITestDriveRepository testDriveRepository;
    @Autowired
    ITestDriveSegmentsRepository iTestDriveSegmentsRepository;
    @Override
    public TestDrive addDatas(TestDrive testDrive)
    {
        Optional<TestDriveSegments> segments=iTestDriveSegmentsRepository.findById(testDrive.getTestDriveSegments().getSegment_id());
        TestDriveSegments segs=segments.get();
        testDrive.setTestDriveSegments(segs);
        return testDriveRepository.save(testDrive);
    }
    @Override
    public List<TestDrive> getAll()
    {
        return testDriveRepository.findAll();
    }
    @Override
    public List<TestDrive>getSegments(long drive)
    {
        return testDriveRepository.findBySegments(drive);
    }

}

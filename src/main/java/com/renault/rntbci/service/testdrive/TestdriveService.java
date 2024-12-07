package com.renault.rntbci.service.testdrive;

import com.renault.rntbci.dbservice.customerservice.entity.CustomerDetails;
import com.renault.rntbci.dbservice.customerservice.repository.ICustomerDetailsRepository;
import com.renault.rntbci.dbservice.segment.entity.Segments;
import com.renault.rntbci.dbservice.segment.repository.ISegmentRepository;
import com.renault.rntbci.dbservice.testdrive.entity.TestDriveBooking;
import com.renault.rntbci.dbservice.testdrive.entity.TestDriveModels;
import com.renault.rntbci.dbservice.testdrive.repository.ITestDriveBookingRepository;
import com.renault.rntbci.dbservice.testdrive.repository.ITestDriveRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TestdriveService implements ITestDriveImpl{

    @Autowired
    ITestDriveRepository trepo;

    @Autowired
    ISegmentRepository srepo;

    @Autowired
    ICustomerDetailsRepository crepo;

    @Autowired
    ITestDriveBookingRepository tbrepo;


    public TestDriveModels addtestdrive(TestDriveModels testDriveModels) {
        long id=testDriveModels.getSegments().getSegment_id();
        Segments s=srepo.findById(id).get();
        testDriveModels.setSegments(s);
        return trepo.save(testDriveModels);
    }

    public List<TestDriveModels> getById(long testid) {
        List<TestDriveModels> list=trepo.findBySegments_segment_id(testid);

        return list;
    }


    public TestDriveBooking saveBooking(TestDriveBooking book) {
        long tid=book.getTestDriveModels().getTest_drive_id();
        System.out.println(tid);
        TestDriveModels tobj=trepo.findById(tid).get();
        book.setTestDriveModels(tobj);

        long cid=book.getCustomerDetails().getCustomer_id();
        System.out.println(cid);
        CustomerDetails cobj=crepo.findById(cid).get();
        book.setCustomerDetails(cobj);

        return tbrepo.save(book);


    }
}

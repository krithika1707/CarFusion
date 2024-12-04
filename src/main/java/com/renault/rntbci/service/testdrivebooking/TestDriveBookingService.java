package com.renault.rntbci.service.testdrivebooking;

import com.renault.rntbci.dbservice.customerdetails.entity.CustomerDetails;
import com.renault.rntbci.dbservice.customerdetails.repository.ICustomerRepository;
import com.renault.rntbci.dbservice.testdricesegments.entity.TestDriveSegments;
import com.renault.rntbci.dbservice.testdrive.entity.TestDrive;
import com.renault.rntbci.dbservice.testdrive.entity.TestDriveBooking;
import com.renault.rntbci.dbservice.testdrive.repository.ITestDriveBookingRepository;
import com.renault.rntbci.dbservice.testdrive.repository.ITestDriveRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class TestDriveBookingService {
    @Autowired
    ITestDriveBookingRepository iTestDriveBookingRepository;
    @Autowired
    ITestDriveRepository iTestDriveRepository;
    @Autowired
    ICustomerRepository iCustomerRepository;
    public TestDriveBooking addDatas(TestDriveBooking testDriveBooking)
    {
        Optional<CustomerDetails> details=iCustomerRepository.findById(testDriveBooking.getDetails().getCustomer_id());
        CustomerDetails details1= details.get();
        testDriveBooking.setDetails(details1);
        Optional<TestDrive> drives=iTestDriveRepository.findById(testDriveBooking.getTestDrive().getTestdrive_id());
        TestDrive drives1= drives.get();
        testDriveBooking.setTestDrive(drives1);
        return iTestDriveBookingRepository.save(testDriveBooking);
    }
}

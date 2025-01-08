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

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class TestDriveBookingService implements ITestDriveBookingImpl{
    @Autowired
    ITestDriveBookingRepository iTestDriveBookingRepository;
    @Autowired
    ITestDriveRepository iTestDriveRepository;
    @Autowired
    ICustomerRepository iCustomerRepository;
    @Override
    public TestDriveBooking addDatas(TestDriveBooking testDriveBooking)
    {
        long id=testDriveBooking.getDetails().getCustomer_id();
        System.out.println(id+" customer id");
        Optional<CustomerDetails> details=iCustomerRepository.findById(testDriveBooking.getDetails().getCustomer_id());
        CustomerDetails details1= details.get();
        testDriveBooking.setDetails(details1);
        Optional<TestDrive> drives=iTestDriveRepository.findById(testDriveBooking.getTestDrive().getTestdrive_id());
        TestDrive drives1= drives.get();
        testDriveBooking.setTestDrive(drives1);
        return iTestDriveBookingRepository.save(testDriveBooking);
    }

    public List<TestDriveBooking> getAll(){
        return iTestDriveBookingRepository.findAll();
    }
    public TestDriveBooking getTestDriveBookings(long id) {
//        List<TestDriveBooking> list1 = new ArrayList<>();
        for (TestDriveBooking testDriveBooking : getAll()) {
            if(testDriveBooking.getDetails() != null) {
                if (testDriveBooking.getDetails().getCustomer_id() == id) {
                    return testDriveBooking;
                }
            }

        }

        throw new RuntimeException("Bookings not found");
    }
}

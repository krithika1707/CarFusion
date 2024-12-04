package com.renault.rntbci.dbservice.testdrive.repository;

import com.renault.rntbci.dbservice.testdrive.entity.TestDriveBooking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ITestDriveBookingRepository extends JpaRepository<TestDriveBooking,Long> {
}

package com.renault.rntbci.dbservice.testdrive.repository;

import com.renault.rntbci.dbservice.testdrive.entity.TestDriveBooking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ITestDriveBookingRepository extends JpaRepository<TestDriveBooking,Long> {
}

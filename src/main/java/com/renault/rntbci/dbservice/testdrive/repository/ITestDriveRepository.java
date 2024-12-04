package com.renault.rntbci.dbservice.testdrive.repository;

import com.renault.rntbci.dbservice.customerdetails.entity.CustomerDetails;
import com.renault.rntbci.dbservice.testdrive.entity.TestDrive;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ITestDriveRepository extends JpaRepository<TestDrive,Long>
{
    @Query("SELECT c FROM TestDrive c WHERE c.testDriveSegments.segment_id = :ids")
    List<TestDrive> findBySegments(long ids);
}

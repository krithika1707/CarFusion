package com.renault.rntbci.dbservice.testdricesegments.repository;

import com.renault.rntbci.dbservice.testdricesegments.entity.TestDriveSegments;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ITestDriveSegmentsRepository extends JpaRepository<TestDriveSegments,Long> {
}

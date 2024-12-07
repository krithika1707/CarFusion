package com.renault.rntbci.dbservice.testdrive.repository;

import com.renault.rntbci.dbservice.testdrive.entity.TestDriveModels;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ITestDriveRepository extends JpaRepository<TestDriveModels,Long> {


    @Query("select t from TestDriveModels t where t.segments.segment_id=:segment_id")
    List<TestDriveModels> findBySegments_segment_id(long segment_id);
}

package com.renault.rntbci.dbservice.segment.repository;

import com.renault.rntbci.dbservice.segment.entity.Segments;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ISegmentRepository extends JpaRepository<Segments,Long> {
}

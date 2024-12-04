package com.renault.rntbci.dbservice.testdricesegments.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class TestDriveSegments
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long segment_id;
    String segment;

    public long getSegment_id() {
        return segment_id;
    }

    public void setSegment_id(long segment_id) {
        this.segment_id = segment_id;
    }

    public String getSegment() {
        return segment;
    }

    public void setSegment(String segment) {
        this.segment = segment;
    }
}

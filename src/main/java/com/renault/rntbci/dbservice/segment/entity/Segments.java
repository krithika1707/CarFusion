package com.renault.rntbci.dbservice.segment.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.renault.rntbci.dbservice.testdrive.entity.TestDriveModels;
import jakarta.persistence.*;

import java.util.List;

@Entity
public class Segments {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long segment_id;
    private String segment_name;
    @OneToMany(mappedBy = "segments",cascade = CascadeType.ALL)
    @JsonIgnore
    private List<TestDriveModels> testDriveModelsList;

    public long getSegment_id() {
        return segment_id;
    }

    public void setSegment_id(long segment_id) {
        this.segment_id = segment_id;
    }

    public String getSegment_name() {
        return segment_name;
    }

    public void setSegment_name(String segment_name) {
        this.segment_name = segment_name;
    }

    public List<TestDriveModels> getTestDriveModelsList() {
        return testDriveModelsList;
    }

    public void setTestDriveModelsList(List<TestDriveModels> testDriveModelsList) {
        this.testDriveModelsList = testDriveModelsList;
    }
}

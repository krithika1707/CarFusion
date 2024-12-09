package com.renault.rntbci.dbservice.testdrive.entity;
import com.renault.rntbci.dbservice.testdricesegments.entity.TestDriveSegments;
import jakarta.persistence.*;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import java.time.LocalDateTime;
import java.util.List;
@Entity
public class TestDrive {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long testdrive_id;
    String car_name;
    @Column(length = 1000)
    String  car_image;
    String  time_slots[];
    String description;
    @ManyToOne
    @JoinColumn(name = "segment_id")
    private TestDriveSegments testDriveSegments;
    public TestDriveSegments getTestDriveSegments() {
        return testDriveSegments;
    }

    public void setTestDriveSegments(TestDriveSegments testDriveSegments) {
        this.testDriveSegments = testDriveSegments;
    }

    public long getTestdrive_id() {
        return testdrive_id;
    }

    public void setTestdrive_id(long testdrive_id) {
        this.testdrive_id = testdrive_id;
    }

    public String getCar_name() {
        return car_name;
    }

    public void setCar_name(String car_name) {
        this.car_name = car_name;
    }

    public String getCar_image() {
        return car_image;
    }

    public void setCar_image(String car_image) {
        this.car_image = car_image;
    }

    public String[] getTime_slots() {
        return time_slots;
    }

    public void setTime_slots(String[] time_slots) {
        this.time_slots = time_slots;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}

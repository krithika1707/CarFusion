package com.renault.rntbci.service.segment;

import com.renault.rntbci.dbservice.segment.entity.Segments;
import com.renault.rntbci.dbservice.segment.repository.ISegmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.text.Segment;
import java.util.List;

@Service
public class SegmentService implements ISegmentImpl{

    @Autowired
    ISegmentRepository srepo;

    public Segments addSegments(Segments segment) {
        return srepo.save(segment);
    }

    public List<Segments> getSegments() {
        return srepo.findAll();
    }
}

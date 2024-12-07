package com.renault.rntbci.service.segment;

import com.renault.rntbci.dbservice.segment.entity.Segments;

import java.util.List;

public interface ISegmentImpl {
    Segments addSegments(Segments segment);
    List<Segments> getSegments();
}

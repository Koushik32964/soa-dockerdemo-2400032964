package com.klef.soa.docker.service;

import java.util.List;

import com.klef.soa.docker.entity.AirConditionerServiceEntity;

public interface AirConditionerService {

    AirConditionerServiceEntity add(
            AirConditionerServiceEntity entity);

    List<AirConditionerServiceEntity> displayAll();

    
    AirConditionerServiceEntity update(
            Long id, AirConditionerServiceEntity entity);
    boolean deleteById(Long id);
}
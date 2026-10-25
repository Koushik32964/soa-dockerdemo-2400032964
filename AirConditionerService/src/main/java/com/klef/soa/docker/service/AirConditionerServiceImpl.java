package com.klef.soa.docker.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klef.soa.docker.entity.AirConditionerServiceEntity;
import com.klef.soa.docker.repository.AirConditionerServiceRepository;
import com.klef.soa.docker.service.AirConditionerService;

@Service
public class AirConditionerServiceImpl
        implements AirConditionerService {

    @Autowired
    private AirConditionerServiceRepository repository;

    @Override
    public AirConditionerServiceEntity add(
            AirConditionerServiceEntity entity) {

        entity.setId(null);
        return repository.save(entity);
    }

    @Override
    public List<AirConditionerServiceEntity> displayAll() {
        return repository.findAll();
    }

    @Override
    public boolean deleteById(Long id) {

        if (repository.existsById(id)) {
            repository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }
    
    
    @Override
    public AirConditionerServiceEntity update(
            Long id, AirConditionerServiceEntity entity) {

        if (repository.existsById(id)) {
            entity.setId(id);
            return repository.save(entity);
        } else {
            return null;
        }
    }
}
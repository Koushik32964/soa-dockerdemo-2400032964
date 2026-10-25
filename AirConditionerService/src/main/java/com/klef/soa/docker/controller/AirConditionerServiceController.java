package com.klef.soa.docker.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.klef.soa.docker.entity.AirConditionerServiceEntity;
import com.klef.soa.docker.service.AirConditionerService;

@RestController
@CrossOrigin(origins = "*")
public class AirConditionerServiceController {

    @Autowired
    private AirConditionerService service;

    @GetMapping("/")
    public String home() {
        return "Air Conditioner Service is running";
    }

    @PostMapping("/Add")
    public ResponseEntity<AirConditionerServiceEntity> add(
            @RequestBody AirConditionerServiceEntity entity) {

        AirConditionerServiceEntity savedEntity =
                service.add(entity);

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(savedEntity);
    }

    @GetMapping("/DisplayAll")
    public List<AirConditionerServiceEntity> displayAll() {
        return service.displayAll();
    }

    @DeleteMapping("/Delete/{id}")
    public ResponseEntity<String> delete(
            @PathVariable Long id) {

        boolean deleted = service.deleteById(id);

        if (deleted) {
            return ResponseEntity.ok(
                    "Record deleted successfully with ID: " + id);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("Record not found with ID: " + id);
        }
    }
    
    @PutMapping("/Update/{id}")
    public ResponseEntity<?> update(
            @PathVariable Long id,
            @RequestBody AirConditionerServiceEntity entity) {

        AirConditionerServiceEntity updatedEntity =
                service.update(id, entity);

        if (updatedEntity != null) {
            return ResponseEntity.ok(updatedEntity);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("Record not found with ID: " + id);
        }
    }
}
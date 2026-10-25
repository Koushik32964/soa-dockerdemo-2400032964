package com.klef.soa.docker.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Entity
@Table(name = "air_conditioner_services")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class AirConditionerServiceEntity 
{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String brand;
    private String serviceDate;
    private Double serviceCost;
    private Boolean completed;
}
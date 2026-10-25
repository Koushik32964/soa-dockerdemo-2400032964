package com.klef.soa.docker.dto;

import jakarta.validation.constraints.*;

public class AirConditionerServiceRequest {
    @NotBlank(message = "Brand is required")
    @Size(max = 100, message = "Brand must be at most 100 characters")
    private String brand;

    @NotNull(message = "Service date is required")
    private String serviceDate;

    @NotNull(message = "Service cost is required")
    @DecimalMin(value = "0.0", message = "Service cost cannot be negative")
    private Double serviceCost;

    @NotNull(message = "Completed must be selected")
    private Boolean completed;

    public String getBrand() { return brand; }
    public void setBrand(String brand) { this.brand = brand; }
    public String getServiceDate() { return serviceDate; }
    public void setServiceDate(String serviceDate) { this.serviceDate = serviceDate; }
    public Double getServiceCost() { return serviceCost; }
    public void setServiceCost(Double serviceCost) { this.serviceCost = serviceCost; }
    public Boolean getCompleted() { return completed; }
    public void setCompleted(Boolean completed) { this.completed = completed; }
}

package com.navin.labourshub.controller;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.navin.labourshub.entity.LabourEntity;
import com.navin.labourshub.service.LabourService;

@RestController
public class LabourController {
	
	@Autowired
	private LabourService labourService;

	
	@GetMapping("labour/city/{city}")
	public List<LabourEntity> getAllLaboursByCity(@PathVariable String city){
		
		return labourService.findByCity(city);
	}
	
	@GetMapping("labour/category/{city}/{category}")
	public List<LabourEntity> getAllLaboursByCityAndCategory(@PathVariable String city, @PathVariable String category ){
		
		return labourService.findByCityAndCategory(city,category);
	}
	
	@GetMapping("labour/{username}")
	public LabourEntity getLabourByUsername(@PathVariable String username){
		
		return labourService.findByUsername(username);
	}
	
	@PostMapping("labour/register")
	public ResponseEntity<String> registerLabour(@RequestBody LabourEntity labourEntity){
		
		Integer status = labourService.registerLabour(labourEntity);
		if(status==1) {
		String successMessage = "You've successfully registered! Welcome to LaboursHub.";
		return ResponseEntity.ok(successMessage);
		}
		else {
			String errorMessage = "You're already registered with us, Please login to continue!";
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorMessage);
		}
	}
	
	@PutMapping("labour/update")
	public ResponseEntity<String> updateLabour(@RequestBody LabourEntity labourEntity){
		labourService.updateLabour(labourEntity);
		String successMessage = "Your details has been successfully updated!";
		return ResponseEntity.ok(successMessage);
	}
	
	@GetMapping("labour/count")
	public Integer getNumberOfLabours() {
		return labourService.getNumberOfLabours();
	}

	@GetMapping("labour/count/city")
	public Integer getNumberOfCities() {
		return labourService.getNumberOfCities();
	}
}

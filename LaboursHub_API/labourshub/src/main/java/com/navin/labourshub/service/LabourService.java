package com.navin.labourshub.service;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.navin.labourshub.entity.LabourEntity;
import com.navin.labourshub.entity.LoginRequest;
import com.navin.labourshub.repository.LabourRepository;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.provisioning.UserDetailsManager;

@Service
public class LabourService {
	
	@Autowired
	private LabourRepository labourRepository;
	
	@Autowired
	private UserDetailsManager userDetailsManager;

	public List<LabourEntity> findByCity(String city){
		return labourRepository.findAllByCity(city);
	}
	
	public LabourEntity findByUsername(String username){
		LabourEntity labour = labourRepository.findByEmailId(username);
		return labour;
	}
	
	BCryptPasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	public Integer registerLabour(LabourEntity labourEntity) {
		LabourEntity labour = labourRepository.findByEmailId(labourEntity.getLabour_email());
		if(labour==null) {
			var labour1 = User.withUsername(labourEntity.getLabour_email())
					.password(labourEntity.getLabour_password())
					.passwordEncoder(str -> passwordEncoder().encode(str))
					.roles("LABOUR")
					.build();
			
			userDetailsManager.createUser(labour1);
			labourEntity.setLabour_password(null);
			labourRepository.save(labourEntity);
			return 1;
		}
		else {
			return 0;
		}
	}
	
	public void updateLabour(LabourEntity labourEntity) {
		labourRepository.save(labourEntity);
	}

	public Integer loginLabour(LoginRequest login) {
		
		List<LabourEntity> labour = labourRepository.findByEmailIdAndPassword(login.getEmail(),login.getPassword());
		if(labour.isEmpty()) {
			return 0;
		}
		else {
			return 1;
		}
	}
	
	public Integer getNumberOfLabours() {
		return labourRepository.countAllLabours();
	}
	
	public Integer getNumberOfCities() {
		return labourRepository.countAllCities();
	}

	public List<LabourEntity> findByCityAndCategory(String city, String category) {
		return labourRepository.findAllByCityAndCategory(city,category);
		
	}
}

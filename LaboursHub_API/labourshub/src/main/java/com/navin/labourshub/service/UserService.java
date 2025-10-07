package com.navin.labourshub.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.provisioning.UserDetailsManager;
import org.springframework.stereotype.Service;
import com.navin.labourshub.entity.LoginRequest;
import com.navin.labourshub.entity.UserEntity;
import com.navin.labourshub.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	private UserDetailsManager userDetailsManager;
	
	public UserEntity findByUsername(String username) {
		
		UserEntity user = userRepository.findByEmailId(username);
		
		return user;
	}

	public Integer loginUser(LoginRequest login) {
		
		List<UserEntity> user = userRepository.findByEmailIdAndPassword(login.getEmail(),login.getPassword());
		if(user.isEmpty()) {
			return 0;
		}
		else {
			return 1;
		}
	}
	
	BCryptPasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	public Integer registerUser(UserEntity userEntity) {
		UserEntity user = userRepository.findByEmailId(userEntity.getUser_email());
		if(user==null) {
			var user1 = User.withUsername(userEntity.getUser_email())
					.password(userEntity.getUser_password())
					.passwordEncoder(str -> passwordEncoder().encode(str))
					.roles("USER")
					.build();
			
			userDetailsManager.createUser(user1);
		    userEntity.setUser_password(null);
			userRepository.save(userEntity);
			return 1;
		}
		else {
			return 0;
		}
	}
	
	public void updateUser(UserEntity userEntity) {
		userRepository.save(userEntity);
	}
	
	public List<UserEntity> getAllUser(){
		return userRepository.findAll();
	}
}

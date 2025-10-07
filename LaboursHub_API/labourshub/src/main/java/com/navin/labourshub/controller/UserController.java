package com.navin.labourshub.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.navin.labourshub.entity.LoginRequest;

import com.navin.labourshub.entity.UserEntity;
import com.navin.labourshub.service.UserService;

@RestController
public class UserController {

	
	@Autowired
	UserService userService;

	@GetMapping("user/{username}")
	public UserEntity getUserByUsername(@PathVariable String username) {
		return userService.findByUsername(username);
	}
	
	@PostMapping("user/login")
	public ResponseEntity<String> loginUser(@RequestBody LoginRequest login){
		
		Integer status = userService.loginUser(login);
		if(status==1) {
		String successMessage = "Login Successful!";
		return ResponseEntity.ok(successMessage);
		}
		else {
			String errorMessage = "Invalid Credentials!";
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorMessage);
		}
	}
	
	@PostMapping("user/register")
	public ResponseEntity<String> registerUser(@RequestBody UserEntity userEntity){
		
		Integer status = userService.registerUser(userEntity);
		if(status==1) {
		String successMessage = "You've successfully registered! Welcome to LaboursHub.";
		return ResponseEntity.ok(successMessage);
		}
		else {
			String errorMessage = "You're already registered with us, Please login to continue!";
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorMessage);
		}
	}
	
	@PutMapping("user/update")
	public ResponseEntity<String> updateUser(@RequestBody UserEntity userEntity){
		userService.updateUser(userEntity);
		String successMessage = "Your details has been successfully updated!";
		return ResponseEntity.ok(successMessage);
	}
}

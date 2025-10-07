package com.navin.labourshub.entity;

public class LoginResponse {
	
	private String jwtToken;
	private String role;

	public LoginResponse(String jwtToken, String role) {
		super();
		this.jwtToken = jwtToken;
		this.role = role;
	}

	public String getJwtToken() {
		return jwtToken;
	}

	public void setJwtToken(String jwtToken) {
		this.jwtToken = jwtToken;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	@Override
	public String toString() {
		return "LoginResponse [jwtToken=" + jwtToken + ", role=" + role + "]";
	}
	
	
}

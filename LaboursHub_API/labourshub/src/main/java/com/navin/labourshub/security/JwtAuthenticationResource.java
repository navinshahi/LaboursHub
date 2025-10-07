package com.navin.labourshub.security;

import java.time.Instant;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.oauth2.jwt.JwtClaimsSet;
import org.springframework.security.oauth2.jwt.JwtEncoder;
import org.springframework.security.oauth2.jwt.JwtEncoderParameters;
import org.springframework.security.provisioning.JdbcUserDetailsManager;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.navin.labourshub.entity.LoginRequest;
import com.navin.labourshub.entity.LoginResponse;

@RestController
public class JwtAuthenticationResource {
	
	

	@Autowired
	private JwtEncoder jwtEncoder;
	
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private JdbcUserDetailsManager jdbcUserDetailsManager;
	

	
	@PostMapping("/authenticate")
	ResponseEntity<LoginResponse> authenticate (@RequestBody LoginRequest loginRequest) {
		
		var authenticationToken = 
                new UsernamePasswordAuthenticationToken(
                		loginRequest.getEmail(), 
                		loginRequest.getPassword());
        
        var authentication = 
                authenticationManager.authenticate(authenticationToken);
        
        UserDetails ud = jdbcUserDetailsManager.loadUserByUsername(loginRequest.getEmail());

        String role = ud.getAuthorities().stream().findFirst().map(GrantedAuthority::getAuthority).orElse(null);
        
        var token = createToken(authentication);
        
        return ResponseEntity.ok(new LoginResponse(token, role));
	}
	
	private String createToken(Authentication authentication) {
		
		var claims = JwtClaimsSet.builder()
							.issuer("self")
							.issuedAt(Instant.now())
							.expiresAt(Instant.now().plusSeconds(60*30))
							.subject(authentication.getName())
							.claim("scope", createScope(authentication))
							.build();
		
		JwtEncoderParameters parameters = JwtEncoderParameters.from(claims);
		return jwtEncoder.encode(parameters).getTokenValue().toString();
	}

	private String createScope(Authentication authentication) {
		
		return authentication.getAuthorities().stream()
			.map(a -> a.getAuthority())
			.collect(Collectors.joining(" "));
	}
	

}


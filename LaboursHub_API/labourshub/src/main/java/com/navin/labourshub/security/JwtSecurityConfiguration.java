package com.navin.labourshub.security;

import javax.sql.DataSource;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.jwt.JwtEncoder;
import org.springframework.security.oauth2.jwt.NimbusJwtDecoder;
import org.springframework.security.oauth2.jwt.NimbusJwtEncoder;
import org.springframework.security.provisioning.JdbcUserDetailsManager;
import org.springframework.security.provisioning.UserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;

import com.nimbusds.jose.JOSEException;
import com.nimbusds.jose.jwk.JWKSet;
import com.nimbusds.jose.jwk.RSAKey;
import com.nimbusds.jose.jwk.source.JWKSource;
import com.nimbusds.jose.proc.SecurityContext;


import java.security.KeyPair;
import java.security.KeyPairGenerator;
import java.security.interfaces.RSAPublicKey;
import java.util.Arrays;
import java.util.List;
import java.util.UUID;

@Configuration
public class JwtSecurityConfiguration {
	
	@SuppressWarnings("unused")
	@Bean
	SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		
		http
		.cors(httpSecurityCorsConfigurer -> httpSecurityCorsConfigurer.configurationSource( request -> {
            CorsConfiguration configuration = new CorsConfiguration();
            configuration.setAllowedOrigins(List.of("http://localhost:3000"));
            configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE"));
            configuration.setAllowedHeaders(List.of("*"));
              return configuration;}))

        	.authorizeHttpRequests(auth -> auth
            .requestMatchers("/authenticate").permitAll()
            .requestMatchers("labour/register").permitAll()
            .requestMatchers("user/register").permitAll()
            .requestMatchers("labour/city/{city}").permitAll()
            .requestMatchers("labour/count/city").permitAll()
            .requestMatchers("labour/category/{city}/{category}").permitAll()
            .requestMatchers("labour/count").permitAll()
            .requestMatchers(HttpMethod.OPTIONS,"/**")
            .permitAll()
            .anyRequest()
            .authenticated())
        .csrf(AbstractHttpConfigurer::disable)
        .sessionManagement(session -> session.
            sessionCreationPolicy(SessionCreationPolicy.STATELESS))
        .oauth2ResourceServer((oauth2) -> oauth2
        	    .jwt(Customizer.withDefaults())
        		)
        .httpBasic(
                Customizer.withDefaults())
        .headers(headers -> headers
                .frameOptions(frameOptions -> frameOptions
                        .sameOrigin()
                    )
                );
		
		return http.build();
	}

	
	
	@Bean
	@ConfigurationProperties("app.datasource")
	com.zaxxer.hikari.HikariDataSource dataSource() {
	    return org.springframework.boot.jdbc.DataSourceBuilder.create()
	        .type(com.zaxxer.hikari.HikariDataSource.class)
	        .build();
	 }
	
	@SuppressWarnings("finally")
	@Bean
	UserDetailsManager userDetailsManager(DataSource dataSource) {
		var jdbcUserDetailsManager = new JdbcUserDetailsManager(dataSource);
		try {
		jdbcUserDetailsManager.loadUserByUsername("naveenkumarshahi0@gmail.com");
		var labour = User.withUsername("naveenkumarshahi0@gmail.com")
					.password("Navin@2024")
					.passwordEncoder(str -> passwordEncoder().encode(str))
					.roles("LABOUR")
					.build();
			
		jdbcUserDetailsManager.createUser(labour);
		return jdbcUserDetailsManager;
		}
		finally {
			return jdbcUserDetailsManager;
		}
		
	}
	
	@Bean
	BCryptPasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	//Creating Key Pair
	@Bean
	KeyPair keyPair() {
		try {
			var keyPairGenerator = KeyPairGenerator.getInstance("RSA");
			keyPairGenerator.initialize(2048);
			return keyPairGenerator.generateKeyPair();
		} catch(Exception ex) {
			throw new RuntimeException(ex);
		}
	}
	
	//Creating RSA Key Object using Key Pair
	@Bean
	RSAKey rsaKey(KeyPair keyPair) {
		
		return new RSAKey
					.Builder((RSAPublicKey)keyPair.getPublic())
					.privateKey(keyPair.getPrivate())
					.keyID(UUID.randomUUID().toString())
					.build();
	}

	//Creating JWK Source
	@SuppressWarnings("unused")
	@Bean
	JWKSource<SecurityContext> jwkSource(RSAKey rsaKey) {
		
		var jwkSet = new JWKSet(rsaKey);
		
		return  (jwkSelector,context) -> jwkSelector.select(jwkSet);			
		
	}
	
	@Bean
	JwtDecoder jwtDecoder(RSAKey rsaKey) throws JOSEException {
		return NimbusJwtDecoder
				.withPublicKey(rsaKey.toRSAPublicKey())
				.build();
	}
	
	@Bean
	JwtEncoder jwtEncoder(JWKSource<SecurityContext> jwkSource) {
		return new NimbusJwtEncoder(jwkSource);
	}
	
	@Bean
    AuthenticationManager authenticationManager(AuthenticationConfiguration configuration) throws Exception {
        // Uses the discovered AuthenticationProvider beans (e.g., DaoAuthenticationProvider)
        return configuration.getAuthenticationManager();
    }
}

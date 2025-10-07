package com.navin.labourshub.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.navin.labourshub.entity.UserEntity;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Integer> {

	@Query(nativeQuery = true,value="SELECT * FROM User_Db WHERE user_email = :email")
	UserEntity findByEmailId(@Param("email") String email);
	
	@Query(nativeQuery = true,value="SELECT * FROM User_Db WHERE user_email = :email AND user_password = :password")
	List<UserEntity> findByEmailIdAndPassword(@Param("email") String email, @Param("password") String password);
}

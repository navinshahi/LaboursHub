package com.navin.labourshub.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.navin.labourshub.entity.LabourEntity;

@Repository
public interface LabourRepository extends JpaRepository<LabourEntity, Integer> {

	@Query(nativeQuery = true,value="SELECT * FROM Labour_Db WHERE city= :city")
	List<LabourEntity> findAllByCity(@Param("city") String city);
	
	@Query(nativeQuery = true,value="SELECT * FROM Labour_Db WHERE city= :city AND sector= :category")
	List<LabourEntity> findAllByCityAndCategory(@Param("city") String city, @Param("category") String category);
	
	@Query(nativeQuery = true,value="SELECT * FROM Labour_Db WHERE labour_email = :email")
	LabourEntity findByEmailId(@Param("email") String email);
	
	@Query(nativeQuery = true,value="SELECT COUNT(*) FROM Labour_Db")
	Integer countAllLabours();
	
	@Query(nativeQuery = true,value="SELECT COUNT(DISTINCT city) FROM Labour_Db")
	Integer countAllCities();
	
	@Query(nativeQuery = true,value="SELECT * FROM Labour_Db WHERE labour_email = :email AND labour_password = :password")
	List<LabourEntity> findByEmailIdAndPassword(@Param("email") String email, @Param("password") String password);

}

package com.navin.labourshub.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="LabourDb")
public class LabourEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer labour_id;
	private String labour_name;
	private String labour_email;
	private String labour_password;
	private String contact;
	private String sector;
	private Integer hourly_cost;
	private String preferred_shift;
	private String availability;
	private Integer experience;
	private String address;
	private String city;
	private String state;
	private String pin_code;
	private Double rating;
	private String summary;
	private String pic_name;
	
	public LabourEntity() {
		super();
	}

	
	public LabourEntity(Integer labour_id, String labour_name, String labour_email, String labour_password,
			String contact, String sector, Integer hourly_cost, String preferred_shift, String availability,
			Integer experience, String address, String city, String state, String pin_code, Double rating,
			String summary, String pic_name) {
		super();
		this.labour_id = labour_id;
		this.labour_name = labour_name;
		this.labour_email = labour_email;
		this.labour_password = labour_password;
		this.contact = contact;
		this.sector = sector;
		this.hourly_cost = hourly_cost;
		this.preferred_shift = preferred_shift;
		this.availability = availability;
		this.experience = experience;
		this.address = address;
		this.city = city;
		this.state = state;
		this.pin_code = pin_code;
		this.rating = rating;
		this.summary = summary;
		this.pic_name = pic_name;
	}
	
	public Integer getLabour_id() {
		return labour_id;
	}
	public void setLabour_id(Integer labour_id) {
		this.labour_id = labour_id;
	}
	public String getLabour_name() {
		return labour_name;
	}
	public void setLabour_name(String labour_name) {
		this.labour_name = labour_name;
	}
	public String getLabour_email() {
		return labour_email;
	}
	public void setLabour_email(String labour_email) {
		this.labour_email = labour_email;
	}
	public String getLabour_password() {
		return labour_password;
	}
	public void setLabour_password(String labour_password) {
		this.labour_password = labour_password;
	}
	public String getContact() {
		return contact;
	}
	public void setContact(String contact) {
		this.contact = contact;
	}
	public String getSector() {
		return sector;
	}
	public void setSector(String sector) {
		this.sector = sector;
	}
	public Integer getHourly_cost() {
		return hourly_cost;
	}
	public void setHourly_cost(Integer hourly_cost) {
		this.hourly_cost = hourly_cost;
	}
	public String getpreferred_shift() {
		return preferred_shift;
	}
	public void setpreferred_shift(String preferred_shift) {
		this.preferred_shift = preferred_shift;
	}
	public String getAvailability() {
		return availability;
	}
	public void setAvailability(String availability) {
		this.availability = availability;
	}
	public Integer getExperience() {
		return experience;
	}
	public void setExperience(Integer experience) {
		this.experience = experience;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getPin_code() {
		return pin_code;
	}
	public void setPin_code(String pin_code) {
		this.pin_code = pin_code;
	}
	public Double getRating() {
		return rating;
	}
	public void setRating(Double rating) {
		this.rating = rating;
	}
	public String getSummary() {
		return summary;
	}
	public void setSummary(String summary) {
		this.summary = summary;
	}
	public String getPic_name() {
		return pic_name;
	}
	public void setPic_name(String pic_name) {
		this.pic_name = pic_name;
	}

	@Override
	public String toString() {
		return "LabourEntity [labour_id=" + labour_id + ", labour_name=" + labour_name + ", labour_email="
				+ labour_email + ", labour_password=" + labour_password + ", contact=" + contact + ", sector=" + sector
				+ ", hourly_cost=" + hourly_cost + ", preferred_shift=" + preferred_shift + ", availability=" + availability
				+ ", experience=" + experience + ", address=" + address + ", city=" + city + ", state=" + state
				+ ", pin_code=" + pin_code + ", rating=" + rating + ", summary=" + summary + ", pic_name=" + pic_name
				+ "]";
	}
	
}

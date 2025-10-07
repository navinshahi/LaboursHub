package com.navin.labourshub.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="UserDb")
public class UserEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer user_id;
	private String user_name;
	private String user_email;
	private String user_password;
	private String contact;
	private String bookmark_labour;
	private String address;
	private String pin_code;
	private String state;
	private String city;
	private String pic_name;
	
	public UserEntity() {
		super();
	}
	
	public UserEntity(Integer user_id, String user_name, String user_email, String user_password, String contact,
			String bookmark_labour, String address, String pin_code, String state, String city,String pic_name) {
		super();
		this.user_id = user_id;
		this.user_name = user_name;
		this.user_email = user_email;
		this.user_password = user_password;
		this.contact = contact;
		this.bookmark_labour = bookmark_labour;
		this.address = address;
		this.pin_code = pin_code;
		this.state = state;
		this.city = city;
		this.pic_name = pic_name;
	}

	public Integer getUser_id() {
		return user_id;
	}

	public void setUser_id(Integer user_id) {
		this.user_id = user_id;
	}

	public String getUser_name() {
		return user_name;
	}

	public void setUser_name(String user_name) {
		this.user_name = user_name;
	}

	public String getUser_email() {
		return user_email;
	}

	public void setUser_email(String user_email) {
		this.user_email = user_email;
	}

	public String getUser_password() {
		return user_password;
	}

	public void setUser_password(String user_password) {
		this.user_password = user_password;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	public String getBookmark_labour() {
		return bookmark_labour;
	}

	public void setBookmark_labour(String bookmark_labour) {
		this.bookmark_labour = bookmark_labour;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPin_code() {
		return pin_code;
	}

	public void setPin_code(String pin_code) {
		this.pin_code = pin_code;
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

	public String getPic_name() {
		return pic_name;
	}

	public void setPic_name(String pic_name) {
		this.pic_name = pic_name;
	}

	@Override
	public String toString() {
		return "UserEntity [user_id=" + user_id + ", user_name=" + user_name + ", user_email=" + user_email
				+ ", user_password=" + user_password + ", contact=" + contact + ", bookmark_labour="
				+ bookmark_labour + ", address=" + address + ", pin_code=" + pin_code + ", state="
				+ state + ", city=" + city + ", pic_name=" + pic_name + "]";
	}
	
}

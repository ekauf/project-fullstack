package com.example.location;


import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
public class Location {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String location;
	private String country;
	private String image;
	@Column(length = 2000)
	private String description;
	private String type;
	private String climate;
	private String price;
	private LocalDate dateCreated = LocalDate.now();


	public Location() {
	}

	public Location(long id, String location, String country, String image, String description, String type, String climate, String price, LocalDate dateCreated) {
		this.id = id;
		this.location = location;
		this.country = country;
		this.image = image;
		this.description = description;
		this.type = type;
		this.climate = climate;
		this.price = price;
		this.dateCreated = dateCreated;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getClimate() {
		return climate;
	}

	public void setClimate(String climate) {
		this.climate = climate;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	public LocalDate getDateCreated() {
		return dateCreated;
	}

	public void setDateCreated(LocalDate dateCreated) {
		this.dateCreated = dateCreated;
	}
}

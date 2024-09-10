package com.eyefund.ngo.model;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "clothing")
public class Stationary {

	@Id
	private String id;
	private String sname;
	private String semail;
	private long number;
	private String statType;
	private String item;
	private Date donateDate;

	public Stationary() {
		super();
	}

	public Stationary(String id, String sname, String semail, long number, String statType, String item,
			Date donateDate) {
		super();
		this.id = id;
		this.sname = sname;
		this.semail = semail;
		this.number = number;
		this.statType = statType;
		this.item = item;
		this.donateDate = donateDate;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getSname() {
		return sname;
	}

	public void setSname(String sname) {
		this.sname = sname;
	}

	public String getSemail() {
		return semail;
	}

	public void setSemail(String semail) {
		this.semail = semail;
	}

	public long getNumber() {
		return number;
	}

	public void setNumber(long number) {
		this.number = number;
	}

	public String getStatType() {
		return statType;
	}

	public void setStatType(String statType) {
		this.statType = statType;
	}

	public String getItem() {
		return item;
	}

	public void setItem(String item) {
		this.item = item;
	}

	public Date getDonateDate() {
		return donateDate;
	}

	public void setDonateDate(Date donateDate) {
		this.donateDate = donateDate;
	}

	@Override
	public String toString() {
		return "Stationary [id=" + id + ", sname=" + sname + ", semail=" + semail + ", number=" + number + ", statType="
				+ statType + ", item=" + item + "]";
	}

}

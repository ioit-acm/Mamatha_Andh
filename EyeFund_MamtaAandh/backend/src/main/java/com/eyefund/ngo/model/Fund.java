package com.eyefund.ngo.model;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Document(collection = "clothing")
public class Fund {

	@Id
	private String id;

	// Donator Name
	private String dname;
	private String demail;
	private long number;
	private int amt;
	private Date donateDate;

	public Fund() {
		super();
	}

	public Fund(String id, String dname, String demail, long number, int amt, Date donateDate) {
		super();
		this.id = id;
		this.dname = dname;
		this.demail = demail;
		this.number = number;
		this.amt = amt;
		this.donateDate = donateDate;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getDname() {
		return dname;
	}

	public void setDname(String dname) {
		this.dname = dname;
	}

	public String getDemail() {
		return demail;
	}

	public void setDemail(String demail) {
		this.demail = demail;
	}

	public long getNumber() {
		return number;
	}

	public void setNumber(long number) {
		this.number = number;
	}

	public int getAmt() {
		return amt;
	}

	public void setAmt(int amt) {
		this.amt = amt;
	}

	public Date getDonateDate() {
		return donateDate;
	}

	public void setDonateDate(Date donateDate) {
		this.donateDate = donateDate;
	}

	@Override
	public String toString() {
		return "Fund [id=" + id + ", dname=" + dname + ", demail=" + demail + ", number=" + number + ", amt=" + amt
				+ ", donateDate=" + donateDate + "]";
	}

}

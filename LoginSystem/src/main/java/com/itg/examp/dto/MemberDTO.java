package com.itg.examp.dto;

import org.apache.ibatis.type.Alias;

//데이터베이스 있는거 넣고 빼고  //타입 memberDTO 
@Alias("memb")  //MemberDTO 이름이 길어서 mapper 간축
public class MemberDTO {

	private int id, age;
	private String mid, mpw, name, address;

	@Override
	public String toString() {
		return "MemberDTO [id=" + id + ", age=" + age + ", mid=" + mid + ", mpw=" + mpw + ", name=" + name
				+ ", address=" + address + "]";
	}
	//private여서 -> get/set 값 가져오
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getMid() {
		return mid;
	}
	public void setMid(String mid) {
		this.mid = mid;
	}
	public String getMpw() {
		return mpw;
	}
	public void setMpw(String mpw) {
		this.mpw = mpw;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	
}

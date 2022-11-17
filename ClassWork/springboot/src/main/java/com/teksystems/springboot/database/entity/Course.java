package com.teksystems.springboot.database.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "course")
public class Course {

	@Id
	@Column(name = "id")
	private Integer id;

	@Column(name = "name")
	private String name;

//	@Column(name = "deptId", insertable=false, updatable = false)
//	private Integer deptId;
//	
//	@ManyToOne(fetch = FetchType.EAGER, optional = false)
//    @JoinColumn(name = "deptId", nullable = false)
//    private Department department;
}
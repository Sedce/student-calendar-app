package net.javaguides.springboot.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "events")
public class Event {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "")
	private String title;

	@Column(name = "start")
	private LocalDateTime start;
	
	@Column(name = "end")
	private LocalDateTime end;
	
	@Column(name = "hours")
	private long hours;
	
	public Event() {
		
	}
	
	public Event(String title, LocalDateTime startDate, LocalDateTime endDate, Long hours) {
		super();
		this.title = title;
		this.start = startDate;
		this.end = endDate;
		this.hours = hours;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public LocalDateTime getStart() {
		return start;
	}
	public void setStart(LocalDateTime startDate) {
		this.start = startDate;
	}
	public LocalDateTime getEnd() {
		return end;
	}
	public void setEnd(LocalDateTime endDate) {
		this.end = endDate;
	}
	public long getHours() {
		return hours;
	}
	public void setHours(long hours) {
		this.hours = hours;
	}
}

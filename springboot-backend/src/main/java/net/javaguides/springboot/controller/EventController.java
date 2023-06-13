package net.javaguides.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Event;
import net.javaguides.springboot.repository.EventRepository;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EventController {

	@Autowired
	private EventRepository eventRepository;
	
	// get all employees
	@GetMapping("/events")
	public List<Event> getAllEvents(){
		return eventRepository.findAll();
	}		
	
	// create employee rest api
	@PostMapping("/events")
	public Event createEvent(@RequestBody Event event) {
		
		return eventRepository.save(event);
	}
	
	// get employee by id rest api
	@GetMapping("/events/{id}")
	public ResponseEntity<Event> getEventById(@PathVariable Long id) {
		Event event = eventRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Event does not exist with id :" + id));
		return ResponseEntity.ok(event);
	}
	
	// update employee rest api
	
	@PutMapping("/events/{id}")
	public ResponseEntity<Event> updateEvent(@PathVariable Long id, @RequestBody Event eventDetails){
		Event event = eventRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Event not exist with id :" + id));
		
		event.setTitle(eventDetails.getTitle());
		/*event.setLastName(eventDetails.getLastName());
		event.setEmailId(eventDetails.getEmailId()); */
		
		Event updatedEvent = eventRepository.save(event);
		return ResponseEntity.ok(updatedEvent);
	}
	
	// delete employee rest api
	@DeleteMapping("/events/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEvent(@PathVariable Long id){
		Event event = eventRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Event not exist with id :" + id));
		
		eventRepository.delete(event);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
}

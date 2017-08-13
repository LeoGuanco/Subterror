package ar.edu.undav.subterror.rest;

/**
 * Created by leo on 6/11/17.
 */
import ar.edu.undav.subterror.domain.Event;
import ar.edu.undav.subterror.domain.EventType;
import ar.edu.undav.subterror.domain.Station;
import ar.edu.undav.subterror.service.EventService;
import ar.edu.undav.subterror.service.EventTypeService;
import ar.edu.undav.subterror.service.StationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@CrossOrigin
@RequestMapping(value = "/event")
public class EventController
{
    private EventService eventService;

    @Autowired
    public EventController(EventService eventService){
        this.eventService = eventService;
    }

    @GetMapping
    public List<Event> getAllEvent(){
        return this.eventService.getAllEvent();
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<Event> getEvent(@PathVariable Long id){
        ResponseEntity<Event> response;
        Event event = eventService.getEvent(id);

        if(event != null){
            response = new ResponseEntity<Event>(event,HttpStatus.FOUND);
        }else{
            response = new ResponseEntity<Event>(event,HttpStatus.NOT_FOUND);
        }

        return response;
    }

    @PostMapping
    public ResponseEntity<Event> createEvent(@RequestBody Event event){
        // Guardamos y persistimos en la bd
        eventService.addEvent(event);

        return new ResponseEntity<Event>(event,HttpStatus.CREATED);
    }
}
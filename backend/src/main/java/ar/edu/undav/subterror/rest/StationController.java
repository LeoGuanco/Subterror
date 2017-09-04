package ar.edu.undav.subterror.rest;

import ar.edu.undav.subterror.domain.Station;
import ar.edu.undav.subterror.service.StationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by leo on 6/14/17.
 */
@RestController
@RequestMapping(value = "/api")
public class StationController {
    private StationService stationService;

    @Autowired
    public StationController(StationService stationService){
        this.stationService = stationService;
    }

    @GetMapping(value = "/station")
    public List<Station> getAll(){
        return this.stationService.getAllStation();
    }

    @GetMapping(value = "/station/{id}")
    public Station getStation(@PathVariable Long id){
        return stationService.getStationById(id);
    }

}

package com.eyefund.ngo.controller;
import java.util.List;

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

import com.eyefund.ngo.model.Stationary;
import com.eyefund.ngo.service.StationaryService;


@RestController
@RequestMapping("/donationApi/stationary")
//@CrossOrigin(origins = "http://localhost:3000")
public class StationaryController {
    @Autowired
    StationaryService stationaryService;

    @PostMapping
    public ResponseEntity<Stationary> addStationary(@RequestBody Stationary stationary) {
    	System.out.println(stationary.toString());
    	Stationary newC = stationaryService.addStationary(stationary);
        return ResponseEntity.ok(newC);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Stationary> getStationaryById(@PathVariable String id) {
        Stationary stationary = stationaryService.getStationaryById(id);
        return ResponseEntity.ok(stationary);
    }

    @GetMapping
    public ResponseEntity<List<Stationary>> getAllStationary() {
        List<Stationary> stationarylist = stationaryService.getAllStationarys();
        return ResponseEntity.ok(stationarylist);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Stationary> updateStationary(@PathVariable String id, @RequestBody Stationary stationary) {
        Stationary c = stationaryService.updateStationary(id, stationary);
        return ResponseEntity.ok(c);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteStationary(@PathVariable String id) {
        stationaryService.deleteStationary(id);
        return ResponseEntity.noContent().build();
    }
}

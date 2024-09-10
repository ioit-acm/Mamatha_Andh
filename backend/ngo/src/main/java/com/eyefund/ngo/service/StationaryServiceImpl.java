package com.eyefund.ngo.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eyefund.ngo.dao.StationaryRepository;
import com.eyefund.ngo.model.Stationary;
import com.eyefund.ngo.exception.ResourceNotFoundException;

@Service
public class StationaryServiceImpl implements StationaryService {
	    @Autowired
	    StationaryRepository stationaryRepository;

	    public Stationary addStationary(Stationary stationary) {
	        stationary.setDonateDate(new Date());
	        return stationaryRepository.save(stationary);
	    }

	    public Stationary getStationaryById(String id) {
	        // error to be solved
	        return stationaryRepository.findById(id)
	                .orElseThrow(() -> new ResourceNotFoundException("Stationary not found with id: " + id));
	    }

	    public List<Stationary> getAllStationarys() {
	        return stationaryRepository.findAll();
	    }

	    public Stationary updateStationary(String id, Stationary stationary) {
	        Stationary existC = getStationaryById(id);
	        existC.setSname(stationary.getSname());
	        existC.setSemail(stationary.getSemail());
	        existC.setNumber(stationary.getNumber());
	        existC.setStatType(stationary.getStatType()); 
	        existC.setItem(stationary.getItem());
	        existC.setDonateDate(stationary.getDonateDate());
	        return stationaryRepository.save(existC);
	    }

	    public void deleteStationary(String id) {
	        Stationary existC = getStationaryById(id);
	        stationaryRepository.delete(existC);
	    }
}

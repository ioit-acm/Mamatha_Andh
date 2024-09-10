package com.eyefund.ngo.service;

import java.util.List;

import com.eyefund.ngo.model.Stationary;


public interface StationaryService {
	Stationary addStationary(Stationary stationary);

    Stationary getStationaryById(String id);

    List<Stationary> getAllStationarys();

    Stationary updateStationary(String id, Stationary stationary);

    void deleteStationary(String id);
}

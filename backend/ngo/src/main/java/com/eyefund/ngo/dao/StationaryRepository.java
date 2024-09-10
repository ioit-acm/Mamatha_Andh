package com.eyefund.ngo.dao;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.eyefund.ngo.model.Stationary;

public interface StationaryRepository extends MongoRepository<Stationary, String>{

}

package com.eyefund.ngo.dao;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.eyefund.ngo.model.Cloth;

public interface ClothingRepository extends MongoRepository<Cloth, String> {

}

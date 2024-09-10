package com.eyefund.ngo.dao;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.eyefund.ngo.model.Fund;

public interface FundingRepository extends MongoRepository<Fund, String> {

}

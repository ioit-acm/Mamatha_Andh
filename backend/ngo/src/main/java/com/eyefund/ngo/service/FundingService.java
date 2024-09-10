package com.eyefund.ngo.service;

import java.util.List;

import com.eyefund.ngo.model.Fund;

public interface FundingService {
    Fund addFund(Fund fund);

    Fund getFundById(String id);

    List<Fund> getAllFunds();

    Fund updateFund(String id, Fund fund);

    void deleteFund(String id);
}

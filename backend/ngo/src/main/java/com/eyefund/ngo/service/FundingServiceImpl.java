package com.eyefund.ngo.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eyefund.ngo.dao.FundingRepository;
import com.eyefund.ngo.exception.ResourceNotFoundException;
import com.eyefund.ngo.model.Fund;

@Service
public class FundingServiceImpl implements FundingService {

    @Autowired
    FundingRepository fundingRepository;

    @Override
    public Fund addFund(Fund fund) {
        fund.setDonateDate(new Date());
        return fundingRepository.save(fund);
    }

    @Override
    public Fund getFundById(String id) {
        // error to be solved
        return fundingRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Fund not found with id: " + id));
    }

    @Override
    public List<Fund> getAllFunds() {
        return fundingRepository.findAll();
    }

    @Override
    public Fund updateFund(String id, Fund fund) {
        Fund existC = getFundById(id);
        existC.setDname(fund.getDname());
        existC.setDemail(fund.getDemail());
        existC.setNumber(fund.getNumber());
        existC.setAmt(fund.getAmt());
        existC.setDonateDate(fund.getDonateDate());
        return fundingRepository.save(existC);
    }

    @Override
    public void deleteFund(String id) {
        Fund existC = getFundById(id);
        fundingRepository.delete(existC);
    }

}

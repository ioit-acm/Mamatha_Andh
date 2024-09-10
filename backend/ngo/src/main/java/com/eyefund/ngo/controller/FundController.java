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

import com.eyefund.ngo.model.Fund;
import com.eyefund.ngo.service.FundingService;


@RestController
@RequestMapping("/donationApi/fund")
//@CrossOrigin(origins = "http://localhost:3000")
public class FundController {

	@Autowired
    FundingService fundingService;

    @PostMapping
    public ResponseEntity<Fund> addFund(@RequestBody Fund fund) {
    	System.out.println(fund.toString());
    	Fund newC = fundingService.addFund(fund);
        return ResponseEntity.ok(newC);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Fund> getFundById(@PathVariable String id) {
        Fund fund = fundingService.getFundById(id);
        return ResponseEntity.ok(fund);
    }

    @GetMapping
    public ResponseEntity<List<Fund>> getAllFund() {
        List<Fund> fundlist = fundingService.getAllFunds();
        return ResponseEntity.ok(fundlist);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Fund> updateFund(@PathVariable String id, @RequestBody Fund fund) {
        Fund c = fundingService.updateFund(id, fund);
        return ResponseEntity.ok(c);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFund(@PathVariable String id) {
        fundingService.deleteFund(id);
        return ResponseEntity.noContent().build();
    }
}

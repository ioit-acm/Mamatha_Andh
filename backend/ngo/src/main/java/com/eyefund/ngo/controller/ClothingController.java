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

import com.eyefund.ngo.model.Cloth;
import com.eyefund.ngo.service.ClothingService;


@RestController
@RequestMapping("/donationApi/cloth")
//@CrossOrigin(origins = "http://localhost:3000")
public class ClothingController {

    @Autowired
    ClothingService clothingService;

    @PostMapping
    public ResponseEntity<Cloth> addCloth(@RequestBody Cloth cloth) {
    	System.out.println(cloth.toString());
        Cloth newC = clothingService.addCloth(cloth);
        return ResponseEntity.ok(newC);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Cloth> getClothById(@PathVariable String id) {
        Cloth cloth = clothingService.getClothById(id);
        return ResponseEntity.ok(cloth);
    }

    @GetMapping
    public ResponseEntity<List<Cloth>> getAllCloth() {
        List<Cloth> clothlist = clothingService.getAllCloths();
        return ResponseEntity.ok(clothlist);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Cloth> updateCloth(@PathVariable String id, @RequestBody Cloth cloth) {
        Cloth c = clothingService.updateCloth(id, cloth);
        return ResponseEntity.ok(c);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCloth(@PathVariable String id) {
        clothingService.deleteCloth(id);
        return ResponseEntity.noContent().build();
    }
}

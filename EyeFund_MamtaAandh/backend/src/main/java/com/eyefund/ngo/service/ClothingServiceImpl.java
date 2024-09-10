package com.eyefund.ngo.service;

import java.util.Date;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eyefund.ngo.dao.ClothingRepository;
import com.eyefund.ngo.exception.ResourceNotFoundException;
import com.eyefund.ngo.model.Cloth;

@Service
public class ClothingServiceImpl implements ClothingService {

    @Autowired
    ClothingRepository clothingRepository;

    @Override
    public Cloth addCloth(Cloth cloth) {
        cloth.setCreateDate(new Date());
        return clothingRepository.save(cloth);
    }

    @Override
    public Cloth getClothById(String id) {
        // error to be solved
        return clothingRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Cloth not found with id: " + id));
    }

    @Override
    public List<Cloth> getAllCloths() {
        return clothingRepository.findAll();
    }

    @Override
    public Cloth updateCloth(String id, Cloth cloth) {
        Cloth existC = getClothById(id);
        existC.setName(cloth.getName());
        existC.setEmail(cloth.getEmail());
        existC.setNumber(cloth.getNumber());
        existC.setClothType(cloth.getClothType());
        existC.setCreateDate(cloth.getCreateDate());
        return clothingRepository.save(existC);
    }

    @Override
    public void deleteCloth(String id) {
        Cloth existC = getClothById(id);
        clothingRepository.delete(existC);
    }

}

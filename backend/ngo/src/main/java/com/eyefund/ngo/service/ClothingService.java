package com.eyefund.ngo.service;

import java.util.List;

import com.eyefund.ngo.model.Cloth;

public interface ClothingService {
    Cloth addCloth(Cloth cloth);

    Cloth getClothById(String id);

    List<Cloth> getAllCloths();

    Cloth updateCloth(String id, Cloth cloth);

    void deleteCloth(String id);
}

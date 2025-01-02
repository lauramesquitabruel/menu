package com.practice.menu.controller;

import com.practice.menu.food.Food;
import com.practice.menu.food.FoodRepository;
import com.practice.menu.food.FoodResponseDTO;
import com.practice.menu.food.FoodRequestDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
//controla e mapeia todas as request do endpoint 'food'
@RequestMapping("food")
public class FoodController {
    @Autowired
    private FoodRepository repository;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public void saveFood(@RequestBody FoodRequestDTO data){
        Food foodData = new Food(data);
        repository.save(foodData);
        return;
    }

    @GetMapping
    //quando bater no endpoint food com o metódo get, utiliza esse metódo
    public List<FoodResponseDTO> getAll(){
        List<FoodResponseDTO> foodList = repository.findAll().stream().map(FoodResponseDTO::new).toList();
        return foodList;
    }
}

const asyncHandler = require("express-async-handler");
const Stationary = require("../models/stationaryModel");
// @route Get /api/stationary

const { error } = require("console");

// @desc Get all stationary
const getStationary = asyncHandler(async(req, res) =>{
    const stationary = await Stationary.find();
    res.status(200).json(stationary);
})

// @desc Get contact by id
const getStationaryById = asyncHandler(async(req, res) =>{
    const stationary = await Stationary.findById(req.params.id);
    if(!stationary){
        res.status(404);
        throw new Error("Contact not found");
    }

    res.status(200).json(stationary);
})

// @desc create contact 
const createStationary = asyncHandler(async (req, res) => {
    console.log("The request body is: ", req.body);
    const { name, email, number, stationary, stationaryName } = req.body;
    if (!name || !email || !number || !stationary || !stationaryName) {
        res.status(400);
        throw new Error("All fields are mandatory"); // Use 'Error' constructor here
    }
    const result = await Stationary.create({
        name, email, number,stationary, stationaryName
    });
    res.status(201).json(result);
});

// @desc update contact by id
const updateStationary = asyncHandler(async(req, res) =>{
    const stationary = await Stationary.findById(req.params.id);
    if(!stationary){
        res.status(404);
        throw new Error("Contact not found");
    }

    const updatedContact = await Stationary.findByIdAndUpdate(
        req.params.id, req.body, { new: true } );

    res.status(201).json(updatedContact);
})

// @desc delete contact by id

const deleteStationary = asyncHandler(async(req, res) =>{
    const cloth = await Stationary.findById(req.params.id);
    if(!cloth){
        res.status(404);
        throw new Error("Stationary not found");
    }

    await cloth.deleteOne();
    res.json({message: "Stationary deleted"});
});


module.exports = {getStationary, getStationaryById, createStationary, updateStationary, deleteStationary};
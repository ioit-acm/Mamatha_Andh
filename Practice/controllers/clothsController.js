const asyncHandler = require("express-async-handler");
const Cloths = require("../models/contactModel");
// @route Get /api/contacts

const { error } = require("console");

// @desc Get all contacts
const getCloths = asyncHandler(async(req, res) =>{
    const cloths = await Cloths.find();
    res.status(200).json(cloths);
})

// @desc Get contact by id
const getClothsById = asyncHandler(async(req, res) =>{
    const contacts = await Cloths.findById(req.params.id);
    if(!contacts){
        res.status(404);
        console.log("Contact not found");
        throw new Error("Contact not found");
    }

    res.status(200).json(contacts);
})

// @desc create contact 
const createCloths = asyncHandler(async (req, res) => {
    console.log("The request body is: ", req.body);
    const { name, email, number, clothType } = req.body;
    if (!name || !email || !number || !clothType) {
        res.status(400);
        throw new Error("All fields are mandatory"); // Use 'Error' constructor here
    }
    const contacts = await Cloths.create({
        name, email, number,clothType
    });
    console.log("data u")
    res.status(201).json(contacts);
});

// @desc update contact by id
const updateCloths = asyncHandler(async(req, res) =>{
    const contacts = await Cloths.findById(req.params.id);
    if(!contacts){
        res.status(404);
        throw new Error("Contact not found");
    }

    const updatedContact = await Cloths.findByIdAndUpdate(
        req.params.id, req.body, { new: true } );

    res.status(201).json(updatedContact);
})

// @desc delete contact by id

const deleteCloth = asyncHandler(async(req, res) =>{
    const cloth = await Cloths.findById(req.params.id);
    if(!cloth){
        res.status(404);
        throw new Error("Cloth not found");
    }

    await cloth.deleteOne();
    res.json({message: "Cloth deleted"});
});


module.exports = {getCloths, getClothsById, createCloths, updateCloths, deleteCloth};
const asyncHandler = require("express-async-handler");
const Funds = require("../models/fundModel");
// @route Get /api/funds

const { error } = require("console");

// @desc Get all funds
const getFunds = asyncHandler(async(req, res) =>{
    const funds = await Funds.find();
    res.status(200).json(funds);
})

// @desc Get contact by id
const getFundsById = asyncHandler(async(req, res) =>{
    const funds = await Funds.findById(req.params.id);
    if(!funds){
        res.status(404);
        throw new Error("Contact not found");
    }

    res.status(200).json(funds);
})

// @desc create contact 
const createFunds = asyncHandler(async (req, res) => {
    console.log("The request body is: ", req.body);
    const { name, email, number, amount } = req.body;
    if (!name || !email || !number || !amount) {
        res.status(400);
        throw new Error("All fields are mandatory"); // Use 'Error' constructor here
    }
    const funds = await Funds.create({
        name, email, number,amount
    });
    res.status(201).json(funds);
});

// @desc update contact by id
const updateFunds = asyncHandler(async(req, res) =>{
    const funds = await Funds.findById(req.params.id);
    if(!funds){
        res.status(404);
        throw new Error("Contact not found");
    }

    const updatedContact = await Funds.findByIdAndUpdate(
        req.params.id, req.body, { new: true } );

    res.status(201).json(updatedContact);
})

// @desc delete contact by id

const deleteFunds = asyncHandler(async(req, res) =>{
    const cloth = await Funds.findById(req.params.id);
    if(!cloth){
        res.status(404);
        throw new Error("Cloth not found");
    }

    await cloth.deleteOne();
    res.json({message: "Cloth deleted"});
});


module.exports = {getFunds, getFundsById, createFunds, updateFunds, deleteFunds};
const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const stationarySchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add name"],
    },

    email: {
        type: String,
        required: [true, "Please add email"],
    },

    number: {
        type: Number,
        required: [true, "Please add contact number"],
    },

    stationary:{
        type: String,
        required: [true, "No stationary found"],
    },
    stationaryName:{
        type: String,
        required: [true, "No stationary item found"],
    },
},
    {
        timestamp: true,
    }

);

module.exports = mongoose.model("Stationary", stationarySchema);
const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const clothSchema = mongoose.Schema({
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

    clothType:{
        type: String,
        required: [true, "Cloths not selectd"],
    },
},
    {
        timestamp: true,
    }

);

module.exports = mongoose.model("Cloths", clothSchema);
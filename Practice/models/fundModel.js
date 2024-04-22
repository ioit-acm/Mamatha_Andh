const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const fundSchema = mongoose.Schema({
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

    amount:{
        type: Number,
        required: [true, "Amount not entered"],
    },
},
    {
        timestamp: true,
    }

);

module.exports = mongoose.model("Funds", fundSchema);
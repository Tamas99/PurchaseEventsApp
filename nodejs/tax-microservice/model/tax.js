const mongoose = require('mongoose');
const Region = require('../model/regions');

const taxSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
        enum: Object.values(Region)
    },
    value: {
        required: true,
        type: Number
    },
    quantity: {
        required: true,
        type: Number
    }
})

module.exports = mongoose.model('Tax', taxSchema)

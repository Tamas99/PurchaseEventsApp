const mongoose = require('mongoose');
const Pole = require('../model/pole');

const taxSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
        enum: Object.values(Pole)
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

module.exports = mongoose.model('PurchaseEvent', taxSchema)

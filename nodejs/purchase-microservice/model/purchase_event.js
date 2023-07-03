const mongoose = require('mongoose');

const purchaseEventSchema = new mongoose.Schema({
    index: {
        required: true,
        type: String
    },
    name: {
        required: true,
        type: String
    },
    gender: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    phone: {
        required: true,
        type: String
    },
    dateOfBirth: {
        required: true,
        type: String
    },
    houseNumber: {
        required: true,
        type: String
    },
    price: {
        required: true,
        type: String
    },
    sqFt: {
        required: true,
        type: String
    },
    bedrooms: {
        required: true,
        type: String
    },
    bathrooms: {
        required: true,
        type: String
    },
    region: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('PurchaseEvent', purchaseEventSchema)

const express = require('express');
const sendPurchaseEvent = require('../kafka/producer');
const processEvent = require('../service/purchase_service');
const PurchaseEvent = require('../model/purchase_event');

const router = express.Router();

//Post Method
router.post('/purchase', async (req, res) => {
    const purchaseEvent = new PurchaseEvent({
        index: req.body.index,
        name: req.body.name,
        gender: req.body.gender,
        email: req.body.email,
        phone: req.body.phone,
        dateOfBirth: req.body.dateOfBirth,
        houseNumber: req.body.houseNumber,
        price: req.body.price,
        sqFt: req.body.sqFt,
        bedrooms: req.body.bedrooms,
        bathrooms: req.body.bathrooms,
        region: req.body.region
    });

    try {
        const processedPurchaseEvent = await processEvent(purchaseEvent);
        await processedPurchaseEvent.save();
        await sendPurchaseEvent(processedPurchaseEvent);
        res.status(200).json(processedPurchaseEvent);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
})

//Get all Method
router.get('/purchase', async (req, res) => {
    try {
        const purchaseEvents = await PurchaseEvent.find();
        res.json(purchaseEvents);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
})

//Delete all Method
router.delete('/purchase', async (req, res) => {
    try {
        await PurchaseEvent.deleteMany();
        res.send(`Documents have been deleted..`);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
})

module.exports = router;

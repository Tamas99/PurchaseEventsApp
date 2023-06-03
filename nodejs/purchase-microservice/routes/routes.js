const express = require('express');
const PurchaseEvent = require('../model/purchase_event');

const router = express.Router()

module.exports = router;

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
        pole: req.body.pole
    })

    try {
        const purchaseEventToSave = await purchaseEvent.save();
        res.status(200).json(purchaseEventToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Get all Method
router.get('/purchase', async (req, res) => {
    try{
        const purchaseEvents = await PurchaseEvent.find();
        res.json(purchaseEvents)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get by ID Method
router.get('/purchase/:id', async (req, res) => {
    try{
        const purchaseEvent = await PurchaseEvent.findById(req.params.id);
        res.json(purchaseEvent)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Delete all Method
router.delete('/purchase', async (req, res) => {
    try {
        await PurchaseEvent.deleteMany();
        res.send(`Documents have been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

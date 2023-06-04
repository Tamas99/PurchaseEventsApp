const express = require('express');
const Tax = require('../model/tax');

const router = express.Router();

//Post Method
router.post('/tax', async (req, res) => {
    const tax = new Tax({
        name: req.body.name,
        value: req.body.value,
        quantity: req.body.quantity,
    })
    try {
        const taxToSave = await tax.save();
        res.status(200).json(taxToSave);
    }
    catch (error) {
        res.status(400).json({message: error.message});
    }
})

//Get all Method
router.get('/tax', async (req, res) => {
    try{
        const taxes = await Tax.find();
        res.json(taxes);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
})

//Get by Pole Method
router.get('/tax/:pole', async (req, res) => {
    try{
        const tax = await Tax.findOne({ name: req.params.pole });
        res.json(tax.value);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
})

//Delete all Method
router.delete('/tax', async (req, res) => {
    try {
        await Tax.deleteMany();
        res.send(`Documents have been deleted..`);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
})

module.exports = router;

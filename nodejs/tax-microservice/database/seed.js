const mongoose = require('mongoose');
const Pole = require('../model/pole');
const Tax = require('../model/tax');

async function seedTaxes() {
    const taxCount = await mongoose.connection.db.collection('taxes').countDocuments();

    if(taxCount === 0) {
        const taxes = [];
        Object.values(Pole).forEach(pole => {
            taxes.push( new Tax({name: pole, value: 10, quantity: 0}));
        })

        await mongoose.connection.db.collection('taxes').insertMany(taxes);
        console.log('Taxes collection seeded');
    }
}

module.exports = { seedTaxes };

const mongoose = require('mongoose');
const Region = require('../model/regions');
const Tax = require('../model/tax');

async function seedTaxes() {
    const taxCount = await mongoose.connection.db.collection('taxes').countDocuments();

    if (taxCount === 0) {
        const taxes = [];
        Object.values(Region).forEach(region => {
            taxes.push(new Tax({ name: region, value: 10, quantity: 0 }));
        })

        await mongoose.connection.db.collection('taxes').insertMany(taxes);
        console.log('Taxes collection seeded');
    }
}

module.exports = { seedTaxes };

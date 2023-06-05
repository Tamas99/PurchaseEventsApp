const axios = require('axios');
const taxMicroserviceUrl = process.env.TAX_MICROSERVICE_URL || 'http://localhost:8020';

async function getTaxValue(pole) {
    const response = await axios.get(taxMicroserviceUrl + '/tax/' + pole);
    return parseFloat(response.data);
}

async function calculateFullPrice(purchaseEvent) {
    const currentTax = await getTaxValue(purchaseEvent.pole);
    const fullPrice = parseFloat(purchaseEvent.price) + (parseFloat(purchaseEvent.price) * currentTax)/100;
    return fullPrice;
}

async function getFullPrice(purchaseEvent) {
    return calculateFullPrice(purchaseEvent);
}

module.exports = getFullPrice;

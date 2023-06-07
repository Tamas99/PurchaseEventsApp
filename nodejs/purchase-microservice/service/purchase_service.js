const axios = require('axios');
const taxMicroserviceUrl = process.env.TAX_MICROSERVICE_URL || 'http://localhost:8020';

async function getTaxValue(region) {
    const response = await axios.get(taxMicroserviceUrl + '/tax/' + region);
    return parseFloat(response.data);
}

async function calculateFullPrice(housePrice, tax) {
    return parseFloat(housePrice) + (parseFloat(housePrice) * tax) / 100;
}

async function processEvent(purchaseEvent) {
    const taxValue = await getTaxValue(purchaseEvent.region);
    const fullPrice = await calculateFullPrice(purchaseEvent.price, taxValue);
    purchaseEvent.price = fullPrice;
    return purchaseEvent;
}

module.exports = processEvent;

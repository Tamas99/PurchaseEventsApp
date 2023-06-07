const Tax = require('../model/tax');

async function calculateNewTax(taxes, targetTax) {
    return (targetTax.value + targetTax.quantity) / (taxes[0].value + taxes[1].value + taxes[2].value + (taxes[0].quantity + taxes[1].quantity + taxes[2].quantity) / 3);
}

async function handleEvent(purchaseEvent) {
    const taxes = await Tax.find();
    let targetTax = taxes.filter(tax => tax.name === purchaseEvent.region)[0];
    const taxIndex = taxes.indexOf(targetTax);
    if (taxIndex !== -1) {
        taxes.splice(taxIndex, 1);
    }
    const newTaxValue = await calculateNewTax(taxes, targetTax);
    targetTax.value += newTaxValue;
    targetTax.quantity += 1;
    const updatedTax = await Tax.findOneAndUpdate({ _id: targetTax._id }, targetTax, { new: true });
    console.log(`Updated Tax: ${updatedTax}`);
}

module.exports = handleEvent;

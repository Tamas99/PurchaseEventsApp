require('dotenv').config();
const express = require('express');
const { connect } = require('./database/db');
const { seedTaxes } = require('./database/seed');
const consumeMessage = require('./kafka/consumer');
const handleEvent = require('./service/tax_service');
const port = process.env.PORT || 8020;

const app = express();
app.use(express.json());

const routes = require('./route/routes');
app.use('', routes)

async function startServer() {
    await connect();
    await seedTaxes();

    app.listen(port, () => {
        console.log(`Server Started at ${port}`);
    });

    consumeMessage( async (topic, partition, message) => {
        // const purchaseEvent = JSON.stringify(message);
        const purchaseEvent = message;
        console.log(`Received message: (${purchaseEvent.index}, ${purchaseEvent.name}, ${purchaseEvent.price}, ${purchaseEvent.region}) from topic: ${topic}`);
        await handleEvent(purchaseEvent);
      });
}

startServer();

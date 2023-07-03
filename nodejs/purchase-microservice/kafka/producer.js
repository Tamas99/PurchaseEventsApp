const { Kafka } = require('kafkajs');
const bootstrapServers = process.env.KAFKA_BOOTSTRAP_SERVERS || 'localhost:9092';

// Create a Kafka client
const kafka = new Kafka({
  clientId: 'purchase-microservice',
  brokers: [bootstrapServers]  // replace with your Kafka broker(s)
});

// Create a Kafka producer
const producer = kafka.producer();

const sendPurchaseEvent = async (purchaseEvent) => {
  // Ensure the producer is connected
  await producer.connect();

  // Send the purchaseEvent
  await producer.send({
    topic: 'purchase_events',  // replace with your topic
    messages: [
      { value: JSON.stringify(purchaseEvent) },
    ],
  });
};

module.exports = sendPurchaseEvent;

const { Kafka } = require('kafkajs');
const bootstrapServers = process.env.KAFKA_BOOTSTRAP_SERVERS || 'localhost:9092';

// Create a Kafka client
const kafka = new Kafka({
  clientId: 'tax-microservice',
  brokers: [bootstrapServers]
});

// Create a Kafka consumer
const consumer = kafka.consumer({ groupId: 'purchasesGroup' });

const consumeMessage = async (messageCallback) => {
  // Ensure the consumer is connected
  await consumer.connect();

  // Subscribe to the topic
  await consumer.subscribe({ topic: 'purchase_events', fromBeginning: false });

  // Set up the message handler
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const value = JSON.parse(message.value.toString());
      messageCallback(topic, partition, value);
    },
  });
};

module.exports = consumeMessage;

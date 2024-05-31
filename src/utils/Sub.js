import { PubSub } from '@google-cloud/pubsub';
import ListedShareHistoryService from '../services/ListedShareHistoryService.js';

async function startListening() {
  const projectId = 'serjava-demo';
  const subscriptionId = 'pi-duojohns-pub-sub';

  console.log(`### Listening for messages on ${subscriptionId} ###`);

  const pubSubClient = new PubSub({ projectId });
  const subscription = pubSubClient.subscription(subscriptionId);

  const messageHandler = async (message) => {
    console.log(`Id: ${message.id}`);
    console.log(`Data: ${message.data.toString()}`);
    await processJson(message.data.toString());
    message.ack();  // Acknowledge the message
  };

  subscription.on('message', messageHandler);

  subscription.on('error', (error) => {
    console.error(`Received error: ${error.message}`);
  });
}

async function processJson(jsonMessage) {
  try {
    const message = JSON.parse(jsonMessage);
    const listedShareHistoryService = new ListedShareHistoryService();
    await listedShareHistoryService.create({ body: message });
  } catch (error) {
    console.error(`Error processing message: ${error.message}`);
  }
}

export { startListening };
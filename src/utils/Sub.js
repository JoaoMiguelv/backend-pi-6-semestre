import { PubSub } from '@google-cloud/pubsub';
import ListedShareHistoryService from '../services/ListedShareHistoryService.js';

async function startListening() {
  const projectId = 'serjava-demo';
  const subscriptionId = 'duo-johns-sub';

  console.log(`### Listening for messages on ${subscriptionId} ###`);

  while (true) {
    await subscribeAsyncExample(projectId, subscriptionId);
  }
}

async function subscribeAsyncExample(projectId, subscriptionId) {
  const pubSubClient = new PubSub({ projectId });
  const subscription = pubSubClient.subscription(subscriptionId);

  const messageHandler = async (message) => {
    console.log(`Id: ${message.id}`);
    console.log(`Data: ${message.data.toString()}`);
    //await processJson(message.data.toString()); DESCOMENTAR
    message.ack();
  };

  //subscription.on('message', messageHandler); DESCOMENTAR
  const message = {
    data: "{ \"id_listed_shares\": 1,\"date\": \"2024-05-24\",\"last_value\": 11.11,\"opening\": 11.11,\"high\": 11.11,\"low\": 11.11,  \"trading_volume\": 111111111,\"percentage_change\": 1.11}"
  };
  // "{\"teste\": \"teste\"}"

  await processJson(message.data.toString());
}

async function processJson(jsonMessage) {
  const message = JSON.parse(jsonMessage);
  console.log(message);
  const listedShareHistoryService = new ListedShareHistoryService();
  await listedShareHistoryService.create({ body: message });
}

export { startListening };
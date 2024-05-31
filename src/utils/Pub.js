import { PubSub } from '@google-cloud/pubsub';

function getRandomFloat(min, max, decimals) {
  const str = (Math.random() * (max - min) + min).toFixed(decimals);
  return parseFloat(str);
}

function getRandomInt(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

async function publishMessage() {
  const pubSubClient = new PubSub({ projectId: 'serjava-demo' });
  const topicName = 'pi-duojohns-pub';

  const data = JSON.stringify({
    id_listed_shares: getRandomInt([1, 2, 3]),
    date: '2024-05-31',
    last_value: getRandomFloat(10.0, 20.0, 2),
    opening: getRandomFloat(10.0, 20.0, 2),
    high: getRandomFloat(10.0, 20.0, 2),
    low: getRandomFloat(10.0, 20.0, 2),
    trading_volume: Math.floor(Math.random() * (200000000 - 100000000) + 100000000),
    percentage_change: getRandomFloat(0.0, 10.0, 2)
  });

  const dataBuffer = Buffer.from(data);

  try {
    console.log(`Publishing message: ${data}`);
    const messageId = await pubSubClient.topic(topicName).publishMessage({ data: dataBuffer });
    console.log(`Message ${messageId} published.`);
  } catch (error) {
    console.error(`Received error while publishing: ${error.message}`);
  }
}

export { publishMessage };

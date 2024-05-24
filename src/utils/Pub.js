import { PubSub } from '@google-cloud/pubsub';

async function publishMessage() {
  const pubSubClient = new PubSub({ projectId: 'serjava-demo' });
  const topicName = 'your-topic-name';

  const data = JSON.stringify({
    customer: {
      id: 1,
      name: 'John Doe'
    },
    uuid: '123e4567-e89b-12d3-a456-426614174000',
    created_at: '2023-01-01T00:00:00Z',
    type: 'order',
    items: [
      {
        id: 1,
        sku: { id: 'sku123', value: 100.0 },
        category: { id: 'cat123', sub_category: { id: 'subcat123' } },
        quantity: 2
      }
    ]
  });

  const dataBuffer = Buffer.from(data);

  try {
    const messageId = await pubSubClient.topic(topicName).publish(dataBuffer);
    console.log(`Message ${messageId} published.`);
  } catch (error) {
    console.error(`Received error while publishing: ${error.message}`);
  }
}

publishMessage();

var amqp = require('amqplib');
const CONN_URL = 'amqp://localhost';

async function getThem() {
  try{
      var queue = 'hello';
      var connect = await amqp.connect(CONN_URL)
      var create = await connect.createChannel()
      var assertqueue = await create.assertQueue(queue, {durable: false})
      console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);
      var create_queue = await create.consume('hello', msg => console.log('- Received Hello', msg.content.toString()), {noAck: true})
  }catch (e) {
      console.log("-------------------")
      console.log(e.message)
  }
}

getThem()
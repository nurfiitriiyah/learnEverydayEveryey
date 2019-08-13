var amqp = require('amqplib');
const CONN_URL = 'amqp://localhost';

async function sendThem() {
    try {
        var connect = await amqp.connect(CONN_URL)
        var create = await connect.createChannel()
        var queue = 'hello';
        var msg = 'Hello World!';
        var assertqueue = await create.assertQueue(queue, {durable: false})
        var pushqueue = await create.sendToQueue(queue, Buffer.from(msg))
        setTimeout(function() {
            create.close();
            process.exit(0);
        }, 500);

    } catch (e) {
        console.log(e)
    }
}
sendThem()
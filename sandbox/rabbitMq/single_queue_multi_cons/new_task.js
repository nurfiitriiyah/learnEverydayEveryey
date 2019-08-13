var amqp = require('amqplib');
const CONN_URL = 'amqp://localhost';

async function sendThem() {
    try {
        var connect = await amqp.connect(CONN_URL)
        var create = await connect.createChannel()
        var queue = 'task_queue';
        var msg = process.argv.slice(2).join(' ') || "Hello World!";
        var assertqueue = await create.assertQueue('task_queue', {durable: true})
        var pushqueue = await create.sendToQueue('task_queue', Buffer.from(msg))
        setTimeout(function () {
            create.close();
            process.exit(0);
        }, 500);

    } catch (e) {
        console.log(e)
    }
}

sendThem()
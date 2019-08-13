const amqp = require('amqplib')     // Import library amqp
const CONN_URL = 'amqp://localhost';

async function getRabbit() {
    try {
        var connection_rabbit = await amqp.connect(CONN_URL)
        var create_rabbit = await connection_rabbit.createChannel()
        var create_queue = await create_rabbit.consume('hello', msg => console.log('- Received Hello', msg.content.toString()), {noAck: true})
    } catch (e) {
        console.log(e)
    }
}

getRabbit()
var amqp = require("amqplib")
const CONN_URL = 'amqp://localhost';

async function getThem() {
    try {
        var args = process.argv.slice(2);
        if (args.length == 0) {
            console.log("Usage: receive_logs_direct.js [info] [warning] [error]");
            process.exit(1);
        } else {
            var connect = await amqp.connect(CONN_URL)
            var create = await connect.createChannel()
            var exchange = 'direct_logs';
            var createQueue = await create.assertExchange(exchange, 'direct', {durable: false})
            var q = await create.assertQueue('', {exclusive: true})
            args.forEach(function (severity) {
                create.bindQueue(q.queue, exchange, severity);
            });
            var create_queue = await create.consume(q.queue, function (msg) {
                if (msg.fields.routingKey === 'error') {
                    console.log("ini error")
                }
                if (msg.fields.routingKey === 'info') {
                    console.log("ini info")
                }
                if (msg.fields.routingKey === 'warning') {
                    console.log("ini warning")
                }
            }, {
                noAck: true
            });
        }

    } catch (e) {
        console.log(e.error)
    }
}

getThem()
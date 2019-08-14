
var amqp = require("amqplib")
const CONN_URL = 'amqp://localhost';

async function sendThem() {
    try {
        var connect = await amqp.connect(CONN_URL)
        var create = await connect.createChannel()
        var exchange = 'direct_logs';
        var args = await process.argv.slice(2);
        var msg = await args.slice(1).join(' ') || 'Hello World!';
        var severity = await (args.length > 0) ? args[0] : 'info';
        var createQueue = await create.assertExchange(exchange, 'direct', {durable: false})
        var publishQueue = await create.publish(exchange, severity, Buffer.from(msg))
        console.log(" [x] Sent %s: '%s'", severity, msg);
        setTimeout(function() {
            create.close();
            process.exit(0)
        }, 500);
    } catch (e) {
        console.log(e)
    }
}

sendThem()
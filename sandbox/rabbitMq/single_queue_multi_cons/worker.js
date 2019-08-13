// var amqp = require('amqplib/callback_api');
//
// amqp.connect('amqp://localhost', function (error0, connection) {
//     if (error0) {
//         throw error0;
//     }
//     connection.createChannel(function (error1, channel) {
//         if (error1) {
//             throw error1;
//         }
//         var queue = 'task_queue';
//         // This makes sure the queue is declared before attempting to consume from it
//         channel.assertQueue(queue, {
//             durable: true
//         });
//         console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);
//         channel.consume(queue, function(msg) {
//             var secs = msg.content.toString().split('.').length - 1;
//
//             console.log(" [x] Received %s", msg.content.toString());
//             setTimeout(function() {
//                 console.log(" [x] Done");
//             }, secs * 1000);
//         }, {
//             // automatic acknowledgment mode,
//             // see https://www.rabbitmq.com/confirms.html for details
//             // noAck: false nanti dia kalo amti maka hasilnya dialihin ke yg idup
//             noAck: false
//         });
//     });
// });


var amqp = require('amqplib');
const CONN_URL = 'amqp://localhost';

async function getThem() {
    try{
        var queue = 'task_queue';
        var connect = await amqp.connect(CONN_URL)
        var create = await connect.createChannel()
        var assertqueue = await create.assertQueue(queue, {durable: true})
        console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);
        var create_queue = await create.consume(queue, msg =>{
            console.log(" [x] Received %s", msg.content.toString());
        }, {noAck: true})
    }catch (e) {
        console.log("-------------------")
        console.log(e.message)
    }
}

getThem()
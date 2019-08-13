#Single Queue
<hr>
<li><h3>Sender / Publisher</h3></li>
<p>File : <b>send.js</b></p>
<table width="100%">
<thead>
    <tr>
        <td>No</td>
        <td>Name</td>
        <td>Details</td>
    </tr>
</thead>
<tbody>    
    <tr>
        <td>1</td>
        <td>var connect = await amqp.connect(URL)</td>
        <td>conncet(URL) untuk koneksi ke rabbitMQnya</td>
    </tr>
    <tr>
        <td>2</td>
        <td>var create = await connect.createChannel()</td>
        <td>createChannel untuk membuka channel di rabbitMq</td>
    </tr>
    <tr>
        <td>3</td>
        <td>var assertqueue = await create.assertQueue(queue, {durable: false})</td>
        <td>Assertqueue untuk membuat antrian dengan nama seseuai dengan variable queue</td>
    </tr>
    <tr>
        <td>4</td>
        <td>var pushqueue = await create.sendToQueue(queue, Buffer.from(msg))</td>
        <td>sendToQueue untuk menambah antrian seseuai dengan value di var queue</td>
    </tr>
</tbody>
</table>

<li><h3>Receiver / Consumer</h3></li>

<p>File : <b>receive.js</b></p>

<table width="100%">
<thead>
    <tr>
        <td>No</td>
        <td>Name</td>
        <td>Details</td>
    </tr>
</thead>
<tbody>    
    <tr>
        <td>1</td>
        <td>var connect = await amqp.connect(URL)</td>
        <td>conncet(URL) untuk koneksi ke rabbitMQnya</td>
    </tr>
    <tr>
        <td>2</td>
        <td>var create = await connect.createChannel()</td>
        <td>createChannel untuk membuka channel di rabbitMq</td>
    </tr>
    <tr>
        <td>3</td>
        <td>var assertqueue = await create.assertQueue(queue, {durable: false})</td>
        <td>Assertqueue untuk membuat antrian dengan nama seseuai dengan variable queue</td>
    </tr>
    <tr>
        <td>4</td>
        <td>var create_queue = await create.consume('hello', msg => console.log('- Received Hello', msg.content.toString()), {noAck: true})</td>
        <td></td>
    </tr>
</tbody>
</table>


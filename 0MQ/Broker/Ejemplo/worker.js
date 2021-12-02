const zmq = require('zeromq')
let rep = zmq.socket('rep');

rep.connect('tcp://localhost:9999')

rep.on('message', (msg)=> {
    for (i = 0; i < msg.length; i++) console.log(String.fromCharCode(msg[i]))
    setTimeout(()=> {
        rep.send('resp')
    }, 1000)
})
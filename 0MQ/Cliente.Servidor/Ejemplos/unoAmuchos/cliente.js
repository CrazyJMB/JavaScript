const zmq = require('zeromq')
let s = zmq.socket('req')

s.connect('tcp://127.0.0.1:9998')
s.connect('tcp://127.0.0.1:9999')

s.send('Alex1')
s.send('Alex2')

let cont = 0;
s.on('message', (msg) => {
    cont++;
    console.log('Recibido: '+msg)
    if (cont == 2) s.close()
})

const zmq = require('zeromq')
let s = zmq.socket('push')

s.connect('tcp://127.0.0.1:9996')
s.connect('tcp://127.0.0.1:9997')
s.connect('tcp://127.0.0.1:9998')

for (let i=0; i<8; i++)
    s.send(''+i)
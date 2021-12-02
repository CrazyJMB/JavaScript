# 0MQ
Es un MOM (Message Oriented Middleware)

## Caracteristicas básicas
- Eficiente (compromiso fiabilidad/eficiencia)
    - Persistencia débil (colas en RAM)
    - Los sockets tienen colas de mensajes asociadas
        - Colas de mesajes 
        de entrada -> mantiente mensajes que llegan -> genera evento "message"
        de salida -> mantiene los mensajes a enviar
- Define distintos patrones de intercamnio de mensaje
- Util a varios niveles -> mismo codigo para comunicar hilos en un proceso, procesos en una maquina, maquinas en red IP.
    - Solo cambia la config de transporte en la URL
    - Nos centramos en comunicacione entre maquinas sobre TCP

## Mensajes
- Gestion de buffer transparente
    - Gestiona el flujo de mensajes entre las colas de los procesos y nivel de transporte
    - Contenido del mensaje transparente
- Los mensajes se entregan de forma atomica (todo o nada)
    - 1 segmento: `send('hola') -> 4 h o l a`
    - 3 segmentos: `send(['hola', '', 'Ana']) -> 4 h o l a 0 3 A n a`

    - Envio mensaje
        - `send(['uno', 'dos'])` -> `sock.on("message", (a,b)=>{..})` a vale 'uno', b vale 'dos'
        - `send(msg)` -> `sock.on("message", (...m)=>{..})` segmentos de msg en el vector m

## Conexiones
- Gestion de conexion / reconexion entre agentes automatica
    - Un agente ejecuta bind: el resto ejecuta connect
        El orden no importa. Todos se van a encontrar en algun momento
    - Si se ejecuta el bind sobre un puerto en uso, aparece un error de ejecucion.
- Conexion / Reconexion en el transporte TCP
    - **_bind_** - La IP pertenece a una de las interfaces del socket
    - **_connect_** - Deve conocer la dir IP del socket que realice bind
- Cuando un agente termina ejecuta **_close_** de forma implicita
- No solo comunica 1:1
    - n:1 -> n clientes (cada uno **_connect_**), 1 servidor (**_bind_**)
    - 1:n -> 1 cliente (n **_connect_**, uno a cada servidor), n servidores (cada uno **_bind_**)

# ZMQ en node
- Instalacion: `npm install zeromq@4`
- Sintaxis
    - `const zmq = require('zeromq')` -> importa biblioteca
    - `let zsock = zmq.socket('tipoSocket')` -> creación socket (existen varios tipos)
    - `zsock.bind("tcp://*:5555")` -> bind en el port 5555
    - `zsock.connect("tcp://10.0.0.1:5555")` -> connect (host 10.0.0.1, port 5555)
    - `zsock.send([..,..])` -> envio
    - `zsock.on("message", callback)` -> recepcion
    - `zsock.on("close", callback)` -> respuesta al cierre de la conexion

- Pasos para diseñar una aplicacion distribuida:
    1. Decidir que combinacion de **_sockets_** necesitas, y en que agentes se ubican.
    2. Definir el formato de los mensajes a intercambiar
    3. Define las respuestas de cada agente ante los eventos generados por los distintos sockets

# Distintos tipos de sockets
- [Cliente/Servidor: req/rep]("./Cliente.Servidor/RefClienteServidor.md")
- [Pipeline: push/pull]("./Pipeline/RefPipeline.md")
- [Difusion: pub/sub]("./Difusion/RefDifusion.md")
- [Broker (proxy inverso)]("./Broker/RefBroker.md")
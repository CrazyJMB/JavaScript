# Patron Cliente/Servidor: req/rep
- El servidor usa el socket tipo **_rep_**
    - Ejecuta **_bind_**
    - Recibe `s.on('message', callback)`
- El cleinte usa el socket **_req_**
    - Ejecuta **_connect_**
    - Envia `s.send(msg)`

- Es un patron de comunicacion sincrónico
    - Si un cliente envia _n_ peticiones, la segunda, tercera, ... quedan en cola local hata que recibe respuesta la primera peticion.  
    - Pares req/pet totalmente ordenados. (Primero el primero, luego el segundo, etc.)

## Conexiones
- Conexion 1:1
- Conexion 1:n
    - Round-Robin (RR)
    - No paralelizacion
- Conexion n:1
    - Tipica servidor
    - Cola FIFO (First In First Out)

## Formato mensajes
1. El cliente envía un mensaje _m_.
2. **_req_** añade un primer segmento vacio (delimitador) al mensaje.
    - _Delimitador_ -> segmento vacio que separa envoltorio y cuerpo del mensaje.
3. **_rep_** guarda el envoltorio y pasa el cuerpo al Servidor.
4. Cuando **_rep_** envia la respuesta añade el envoltorio de nuevo.
5. Cuando **_req_** recibe la respuesta, descarta el delimitador y pasa el cuerpo al Cliente.
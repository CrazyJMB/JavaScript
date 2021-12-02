# Patron Broker (Proxy inverso)
- El componente broker (intermediario) se encarga de la coordinacion/comunicacion entre componentes
    - Los servidores comunican al broker sus caracteristicas
    - Los clientes solicitan los servicios al broker
    - El broker redirecciona cada solicitud al servidor adecuado

## Broker req/rep
- El cliente pide al broker y el broker al worker
- El broker atiende de uno en uno. Hasta que no responde a la primera _req_ no continua con otra solicitud
- Tenemos un comportamiento sincrono y deberia ser asincrono.

## Broker router/dealer
- Socket **_dealer_**
    - Es asincrono, envio (RR) y recepcion (FIFO)
    - No modifica el mensaje

- Socket **_router_**
    - Es asincrono, envio y recepcion (FIFO)
    - Mantiene una cola por conexion. Cuando recibe, añade el mensaje de identidad de la conexion (id. emisor)
        - Si queremos cambiar el identificado de la conexion debe hacer antes de establecerla mediante `s.identity='xx'`

- Formato mensaje
    - La informacion del cliente viaja junto al mensaje
    
- El broker se limita a:
    - Reenviar por el backend (hacia un trabajador, según turno RR) cada petición de cliente que le llega por el frontend
    - Reenviar al cliente adecuado a través del frontend cada respuesta que le llegue desde un trabajador a través del backend. 
        - Para devolver la respuesta al cliente adecuado se utiliza la información de cliente que viaja en el mensaje de respuesta.

## Broker router/router
La solucion de [router/dealer](## Broker router/dealer) solo es valida cuando el coste de procesar cada trabajo es muy similar.   
Para un uso mas general se propone un broker con **_router/router_**
    - Requiere mantener en el broker la lista de workers disponibles
        - Añadir worker (alta), eliminarlo si se da de baja
        - El socket del worker pasa a ser _req_. En lugar de responder solicitamos trabajos.

    - Formato mensajes
        - La informacion del cliente viaja junto al mensaje
        - Cuando entra al broker podemos ver si hay workers disponibles y si no ponerlo a la espera a que hay uno.
        - Cuando se libere un worker en el broker se mira a ver si hay peticiones del client pendientes.


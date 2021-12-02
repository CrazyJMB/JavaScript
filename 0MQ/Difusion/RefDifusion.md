# Patron Difusion: pub/sub
- Un publicador (pub) difunde mensajes a n subscriptores (sub)
- `s.subscribe('xx')` -> el socket _s_ unicamente recibe los mensajes que tengan como prefijo del primer segmento _xx_
    - El prefijo '' concuerda con todos los mensajes
- El subscriptor recibe los mensajes desde el momento en que se subscribe (Si habian mensajes enviados anteriormente, no los recibe)
- _pub_ y _sub_ no modifican el formato de los mensajes
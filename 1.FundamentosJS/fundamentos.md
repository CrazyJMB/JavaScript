# Fundamentos de JavaScript
JavaScript no es un lenguaje fuertemente "tipado"

```
    let x = "texto" // x representa una cadena (string)
    x = {color:'rojo', marca:'seat', año:2018} // x ahora es un objeto
    x = [1, 2, 3, "prueba", 6] // ahora un vector (array)
    x = function() {return "Ejemplo"} // ahora una función
    let y = x() // ¿qué tipo de valor mantiene y?
```

Hay que tener cuidado con las conversiones implicitas de tipo
´´´
    let x = '7' // x vale "7"
    x == 7 // true (por conversión implícita de tipos)
    x === 7 // false (comparación estricta)
    x + 23 // genera "723" (+ como concatenación de string)
    x + "2" // genera "72"
    x * 2 // genera 14 (previa conversión del valor de x a número)
´´´

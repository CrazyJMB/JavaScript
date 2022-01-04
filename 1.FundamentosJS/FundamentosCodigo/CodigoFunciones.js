function table(x) {
    for (let j = 1; j < 11; j++)
        console.log("%d * %d = %d", x, j, x*j);
    console.log("");
}

function allTables() {
    for (let i=1; i<11; i++)
            table(i);
}

//table(5, 4, 1);
//table(table(2))
allTables(table(30), table(20), table(10))

/**
 * Vistos los resultados de las ejecuciones podemos observar que no
 * afecta pasar mas argumentos a una funcion. Caso de allTables() o 
 * table(5, 4, 1) -> En la cual vemos que solo nos muestra la primera.
 */
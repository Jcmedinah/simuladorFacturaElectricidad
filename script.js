// Una empresa de energía necesita simular la generación de una factura mensual simple. 
// Para ello, deberás construir un sistema básico que calcule el valor a pagar por 
// un cliente utilizando exclusivamente funciones sin parámetros, todas con retorno,
//  y declaradas de diferentes formas: declarativas, de expresión y funciones flecha.


// Requerimientos
// Función declarativa que retorne el consumo mensual en kilovatios (por ejemplo, 410 kWh).

function consumoMensual(){
    let consumo = Number(prompt('Ingrese el consumo de kWh'))
    return consumo
}



// Función declarativa que retorne la tarifa base por kilovatio 
// (por ejemplo, 620 pesos por kWh).

function tarifaBase(){
    let tarifa = Number(prompt("Ingrese el valor del kWh: "))
    return tarifa
}

// Función de expresión que retorne el cargo fijo por servicio 
// (por ejemplo, 3500 pesos).

// Función de expresión que retorne el valor del IVA como porcentaje fijo 
// (por ejemplo, 19).

// Función flecha que retorne el subtotal multiplicando consumo por tarifa.

// Función flecha que retorne el valor del IVA aplicado sobre el subtotal.

// Función flecha que retorne el total a pagar sumando subtotal, IVA y cargo fijo.

// Función final (de cualquier tipo, tú eliges) que imprima en consola todos 
// los resultados con descripciones claras (consumo, tarifa, subtotal, IVA, cargo fijo y total).

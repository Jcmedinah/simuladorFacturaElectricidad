// Una empresa de energía necesita simular la generación de una factura mensual simple. 
// Para ello, deberás construir un sistema básico que calcule el valor a pagar por 
// un cliente utilizando exclusivamente funciones sin parámetros, todas con retorno,
//  y declaradas de diferentes formas: declarativas, de expresión y funciones flecha.


// Requerimientos
// Función declarativa que retorne el consumo mensual en kilovatios (por ejemplo, 410 kWh).

function consumoMensual(){
    return Number(prompt('Ingrese el consumo de kWh'))
    
}

let consumo = consumoMensual()

// Función declarativa que retorne la tarifa base por kilovatio 
// (por ejemplo, 620 pesos por kWh).

function tarifaBase(){
    return Number(prompt("Ingrese el valor del kWh: "))

}


let tarifa = tarifaBase()
// Función de expresión que retorne el cargo fijo por servicio 
// (por ejemplo, 3500 pesos).

const cargoFijo = function(){
    return Number(prompt('Ingrese el valor cargo fijo por servicio: '))
    
}

let cargo = cargoFijo()


// Función de expresión que retorne el valor del IVA como porcentaje fijo 
// (por ejemplo, 19).
const valorIVA = function(){
    return Number(prompt("Ingrese el valor del iva: "))
    
}

let iva = valorIVA()
// Función flecha que retorne el subtotal multiplicando consumo por tarifa.

const calcularSubtotal = () => {
    return consumo * tarifa

}

let subtotal = calcularSubtotal()
// Función flecha que retorne el valor del IVA aplicado sobre el subtotal.
const valorSubtotalIVA = () =>{
    return iva/100 * subtotal
}

let valorSubIVA = valorSubtotalIVA()


// Función flecha que retorne el total a pagar sumando subtotal, IVA y cargo fijo.
const totalPagarServicio = () => {
    return subtotal + valorSubIVA + cargo
}

let totalPagar = totalPagarServicio()
// Función final (de cualquier tipo, tú eliges) que imprima en consola todos 
// los resultados con descripciones claras 
// (consumo, tarifa, subtotal, IVA, cargo fijo y total).
// `
function resultadoFinal(){
    console.log(`Resumen

Consumo del mes: ${consumo}kWh
Tarifa fija del mes: ${tarifa}$/kWh
Subtotal de consumo: $${subtotal}$
Porcentaje IVA: %${iva}
Valor IVA: $${valorSubIVA}
El valor del cargo fijo es: $${cargo}
El total a pagar es: $${totalPagar}`)
}

resultadoFinal()

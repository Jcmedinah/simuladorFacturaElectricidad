let valorHora = Number(prompt("Ingrese el valor de la hora: "));
let cantidadHoras = Number(prompt("Ingrese la cantidad de horas laboradas: "));

function calcularSalarioBruto() {
  if (cantidadHoras > 44) {
    return 44 * valorHora;
  } else {
    return valorHora * cantidadHoras;
  }
}
function cantidadHorasExtras() {
  if (cantidadHoras > 44) {
    return cantidadHoras - 44;
  } else {
    return 0;
  }
}


let salarioBruto = calcularSalarioBruto();
let numeroHorasExtras = cantidadHorasExtras();
let deduciones = salarioBruto * 0.08;


function calcularValorHorasExtras() {
  return valorHora * 1.25 * numeroHorasExtras;
}


function calcularAuxilioTransporte() {
  if (salarioBruto <= 1423500*2) { 
    return 200000;
  }
  return 0;
}

let valorAuxilioTransporte = calcularAuxilioTransporte();

function calcularSalarioNeto() {
  let salarioNeto = salarioBruto + calcularValorHorasExtras() + valorAuxilioTransporte - deduciones;
  console.log(`Colilla de pago
  1 - Salario bruto: ${salarioBruto}
  2 - Auxilio de transporte: ${valorAuxilioTransporte}
  3 - Deduccion salud: ${deduciones/2}
  4 - Deduccion pension: ${deduciones/2}
  5 - Valor horas extras: ${calcularValorHorasExtras()}
  6 - Salario neto: ${salarioNeto}`);
    return salarioNeto;
}
calcularSalarioNeto();
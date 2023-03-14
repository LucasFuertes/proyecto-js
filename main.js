function bienvenidaYsaludo() {
  alert(
    "¡Bienvenido a la concesionaria de vehículos importados!\nAquí podrá encontrar vehículos de diferentes marcas reconocidas en el mundo, ¡desde Chevrolet hasta BMW!"
  );
  let nombre = prompt("Díganos, ¿Cuál es su nombre?");
  while (nombre === "") {
    nombre = prompt("Díganos, ¿Cuál es su nombre?");
  }
  alert(`Un saludo ${nombre}, espero que tengas un buen día`);
  console.log(`Nombre del cliente: ${nombre}`);
}

function eleccionDeAuto() {
  alert(
    "Por ahora, contamos con los siguientes autos a continuación:\n1.- Chevrolet Corvette C6\n2.- Mazda RX-7\n3.- Audi Le mans Quattro\n4.- Nissan 350Z\n5.- BMW M3 GTR"
  );
  let eleccion = prompt(
    "Seleccione uno de los vehiculos escribiendo el número que llevan en la lista: "
  );
  while (eleccion === "") {
    eleccion = prompt(
      "Seleccione uno de los vehiculos escribiendo el número que llevan en la lista: "
    );
  }
  if (eleccion < 1 || eleccion > 5) {
    eleccion = reeleccion(eleccion);
  }
  return parseInt(eleccion);
}

function reeleccion(numAuto) {
  while (numAuto < 1 || numAuto > 5) {
    numAuto = prompt(
      "Lo lamento, no tenemos un vehículo con ese número de lista. Por favor elija de nuevo"
    );
    while (numAuto == "") {
      numAuto = prompt(
        "Lo lamento, no tenemos un vehículo con ese número de lista. Por favor elija de nuevo"
      );
    }
  }
  let reelegido = parseInt(numAuto);
  return reelegido;
}

class Vehiculo {
  constructor(nombre, precio, color) {
    this.nombre = nombre;
    this.precio = precio;
    this.color = color;
    this.vendido = false;
  }
  vender() {
    this.vendido = true;
  }
}

function listaDeAutos(eleccion) {
  const vehiculo1 = new Vehiculo("Chevrolet Corvette C6", 300000, "negro");
  const vehiculo2 = new Vehiculo("Mazda RX-7", 250000, "verde");
  const vehiculo3 = new Vehiculo("Audi Le mans Quattro", 350000, "rojo");
  const vehiculo4 = new Vehiculo("Nissan 350Z", 200000, "verde");
  const vehiculo5 = new Vehiculo("BMW M3 GTR", 500000, "gris");
  const listaDeAutos = [vehiculo1, vehiculo2, vehiculo3, vehiculo4, vehiculo5];

  let vehiculo;
  for (let i = 0; i < listaDeAutos.length; i++) {
    if (i == eleccion) {
      vehiculo = listaDeAutos[i - 1];
    }
  }
  return vehiculo;
}

function precioAuto(num) {
  let precio;
  alert(`El precio del vehículo es de $${num} dólares`);
  return num;
}

function colorDeAuto() {
  let color = "gris";
  let opcionColor = prompt(
    "¿Desea cambiar el color del auto? Responda con SI o NO\nEl color del vehiculo por defecto será " +
      color +
      "\nNo habrá coste por nueva pintura"
  );
  while (opcionColor != "si" && opcionColor != "no") {
    opcionColor = prompt(
      "¿Desea cambiar el color del auto? Responda con SI o NO\nEl color del vehiculo por defecto será " +
        color +
        "\nNo habrá coste por nueva pintura"
    );
  }
  if (opcionColor == "si") {
    color = prompt("¿De qué color lo quiere su vehículo?");
    while (color === "" || color == "gris") {
      color = prompt("¿De qué color lo quiere su vehículo?");
    }
    alert("Muy bien, el color del auto será " + color);
  } else if (opcionColor == "no") {
    alert("Muy bien, el color del auto será " + color + " por defecto");
  }
  return color;
}

function retirarAuto() {
  let envio = 0;
  let opcion = prompt(
    "¿Desea retirarlo personalmente o solicitar que se lo lleven a domicilio?\nEl coste del envío a domicilio es de $500\nResponda escribiendo PERSONALMENTE o DOMICILIO"
  );
  while (opcion != "personalmente" && opcion != "domicilio") {
    opcion = prompt(
      "¿Desea retirarlo personalmente o solicitar que se lo lleven a domicilio?\nEl coste del envío a domicilio es de $500\nResponda escribiendo PERSONALMENTE o DOMICILIO"
    );
  }
  if (opcion == "personalmente") {
    alert("¡De acuerdo! Lo estaremos esperando con gusto");
  } else if (opcion == "domicilio") {
    alert("Muy bien, se le sumará el costo de envío al monto total");
    envio = 500;
  }
  return envio;
}

function montoTotal(costoVehiculo, costoEnvio) {
  let total = costoVehiculo + costoEnvio;
  let pago = prompt(
    "El total a pagar sería $" + total + "\nPor favor abone aquí el dinero: "
  );
  while (pago === "") {
    pago = prompt(
      "El total a pagar sería $" + total + "\nPor favor abone aquí el dinero: "
    );
  }
  let pagado = parseFloat(pago);
  if (pagado == total) {
    alert(
      "¡Muchas gracias por su compra!\nEsperamos que disfrute su nuevo auto"
    );
    console.log("Monto total abonado exitosamente");
  } else if (pagado < total) {
    alert(
      "Lo lamento, el dinero no es suficiente para completar el pago. Por favor vuelva en otro momento"
    );
    console.log("No se pudo completar el pago");
  } else if (pagado > total) {
    let cambio = pagado - total;
    alert(
      "El pago es superior al monto total. Se le devolverá $" +
        cambio +
        " de cambio\n¡Muchas gracias por su compra!"
    );
    console.log("Monto total abonado exitosamente");
  }
}

//Inicio del simulador
bienvenidaYsaludo();

let opcionElegida = eleccionDeAuto();

let vehiculoSeleccionado = listaDeAutos(opcionElegida);

let precioDelAuto = precioAuto(vehiculoSeleccionado.precio);

console.log(`Ha seleccionado: ${vehiculoSeleccionado.nombre}`);

console.log(`Precio del vehículo: $${precioDelAuto}`);

// let colorElegido = colorDeAuto();

// console.log("Color del vehículo: " + colorElegido);

// let costoEnvio = retirarAuto();

// montoTotal(precioDelAuto, costoEnvio);

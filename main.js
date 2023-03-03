function bienvenidaYsaludo(){
    alert("¡Bienvenido a la concesionaria de vehículos importados!\nAquí podrá encontrar vehículos de diferentes marcas reconocidas en el mundo, ¡desde Chevrolet hasta BMW!");
    let nombre = prompt("Díganos, ¿Cuál es su nombre?");
    while(nombre === ""){
        nombre = prompt("Díganos, ¿Cuál es su nombre?");
    }
    alert("Un saludo " + nombre + ", espero que tengas un buen día");
}

function eleccionDeAuto(){
    alert("Por ahora, contamos con los siguientes autos a continuación:\n1.- Chevrolet Corvette C6\n2.- Mazda RX-7\n3.- Audi Le mans Quattro\n4.- Nissan 350Z\n5.- BMW M3 GTR");
    let eleccion = prompt("Seleccione uno de los vehiculos escribiendo el número que llevan en la lista: ");
    while(eleccion === ""){
        eleccion = prompt("Seleccione uno de los vehiculos escribiendo el número que llevan en la lista: ");
    }
    return parseInt(eleccion);
}

function reeleccion(numAuto){
    numAuto = parseInt(prompt("Lo lamento, no tenemos un vehículo con ese número de lista. Por favor elija de nuevo"));
    let reelegido = listaDeAutos(numAuto);
    return reelegido;
}

function listaDeAutos(eleccion){
    let vehiculo;
    switch (eleccion){
        case 1:
            vehiculo = "Chevrolet Corvette C6";
            return vehiculo;
        case 2:
            vehiculo = "Mazda RX-7";
            return vehiculo;
        case 3:
            vehiculo = "Audi Le mans Quattro";
            return vehiculo;
        case 4:
            vehiculo = "Nissan 350Z";
            return vehiculo;
        case 5:
            vehiculo = "BMW M3 GTR";
            return vehiculo;
        default:
            let vehiculoReelegido = reeleccion(eleccion);
            return vehiculoReelegido;
    }
}

function precioAuto(num){
    let precio;
    if(num === "Chevrolet Corvette C6"){
        precio = 300000;
    } else if(num === "Mazda RX-7"){
        precio = 250000;
    } else if(num === "Audi Le mans Quattro"){
        precio = 350000;
    } else if(num === "Nissan 350Z"){
        precio = 200000;
    } else if(num === "BMW M3 GTR"){
        precio = 500000;
    }
    alert("El precio del vehículo es de $" + precio + " dólares");
    return precio;
}

function colorDeAuto(){
    let color = "gris";
    let opcionColor = prompt("¿Desea cambiar el color del auto? Responda con SI o NO\nEl color del vehiculo por defecto será " + color + "\nNo habrá coste por nueva pintura");
    while(opcionColor != "si" && opcionColor != "no"){
        opcionColor = prompt("¿Desea cambiar el color del auto? Responda con SI o NO\nEl color del vehiculo por defecto será " + color + "\nNo habrá coste por nueva pintura");
    }
    if(opcionColor == "si"){
        color = prompt("¿De qué color lo quiere su vehículo?");
        while(color === "" || color == "gris"){
            color = prompt("¿De qué color lo quiere su vehículo?");
        }
        alert("Muy bien, el color del auto será " + color);
    } else if(opcionColor == "no"){
        alert("Muy bien, el color del auto será " + color + " por defecto");
    }
    return color;
}

function retirarAuto(){
    let envio = 0;
    let opcion = prompt("¿Desea retirarlo personalmente o solicitar que se lo lleven a domicilio?\nEl coste del envío a domicilio es de $500\nResponda escribiendo PERSONALMENTE o DOMICILIO");
    while(opcion != "personalmente" && opcion != "domicilio"){
        opcion = prompt("¿Desea retirarlo personalmente o solicitar que se lo lleven a domicilio?\nEl coste del envío a domicilio es de $500\nResponda escribiendo PERSONALMENTE o DOMICILIO");
    }
    if(opcion == "personalmente"){
        alert("¡De acuerdo! Lo estaremos esperando con gusto")
    } else if(opcion == "domicilio"){
        alert("Muy bien, se le sumará el costo de envío al monto total")
        envio = 500;
    }
    return envio;
}

function montoTotal(costoVehiculo, costoEnvio){
    let total = costoVehiculo + costoEnvio;
    let pago = prompt("El total a pagar sería $" + total + "\nPor favor abone aquí el dinero: ");
    while(pago === ""){
        pago = prompt("El total a pagar sería $" + total + "\nPor favor abone aquí el dinero: ");
    }
    let pagado = parseFloat(pago);
    if(pagado == total){
        alert("¡Muchas gracias por su compra!\nEsperamos que disfrute su nuevo auto");
        console.log("Monto total abonado exitosamente");
    } else if(pagado < total){
        alert("Lo lamento, el dinero no es suficiente para completar el pago. Por favor vuelva en otro momento");
        console.log("No se pudo completar el pago");
    } else if(pagado > total){
        let cambio = pagado - total;
        alert("El pago es superior al monto total. Se le devolverá $" + cambio + " de cambio\n¡Muchas gracias por su compra!");
        console.log("Monto total abonado exitosamente");
    }
}


//Inicio del simulador 
bienvenidaYsaludo();

let opcionElegida = eleccionDeAuto();

let vehiculoSeleccionado = listaDeAutos(opcionElegida);

let precioDelAuto = precioAuto(vehiculoSeleccionado);

console.log("Ha seleccionado: " + vehiculoSeleccionado);

console.log("Precio del vehículo: $" + precioDelAuto);

let colorElegido = colorDeAuto();

console.log("Color del vehículo: " + colorElegido);

let costoEnvio = retirarAuto();

montoTotal(precioDelAuto, costoEnvio);
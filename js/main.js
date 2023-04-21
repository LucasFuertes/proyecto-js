function mostrarAutos() {
  const autos = cargarVehiculosLS();
  let salida = "";

  autos.forEach((auto) => {
    salida += `
                <div class="card text-center theme-dark card-size">
                  <img src="${auto.img}" class="card-img-top img-size" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">${auto.nombre}</h5>
                    <p class="card-text">$${auto.precio}</p>
                    <a href="#" class="btn btn-primary" onclick="confirmar(${auto.id})">Elegir</a>
                  </div>
                </div>
              `;
  });

  document.getElementById("autos").innerHTML = salida;
}

function guardarRegistroCompra(vehiculo) {
  localStorage.setItem("", JSON.stringify(vehiculo));
}

function confirmar(id) {
  const auto = buscarAuto(id);

  Swal.fire({
    title: `Eleccion: ${auto.nombre}`,
    text: `¿Está seguro de su elección?`,
    imageUrl: `${auto.img}`,
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image",
    showCancelButton: true,
    cancelButtonText: `Me arrepentí`,
    confirmButtonText: `¡Elijo éste!`,
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(`¡Muy bien!`, ``, "success");
    }
  });
}

function buscarAuto(id) {
  const vehiculoElegido = cargarVehiculosLS();
  return vehiculoElegido.find((auto) => auto.id === id);
}

// function datosCliente() {
//   formulario.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const cliente = new Cliente(nombre.value, dni.value, auto.value);

//     listaClientes.push(cliente);

//     formulario.reset();

/* Luego de haber agregado el nuevo objeto al array, se guarda dicho array dentro del localStorage con el uso de JSON, además de usar un console.log para mostrar por consola los datos guardados */
// guardarDatos();

/* Y para finalizar, se muestran nodos en el HTML con la información personal registrada.
    Si bien el HTML se sobreescribe luego de registrar nuevos datos, en el localStorage seguirán 
    persistiendo los datos anteriores */
//     mostrarRegistro(cliente);
//   });
// }

// function guardarDatos() {
//   localStorage.setItem("clientes", JSON.stringify(listaClientes));

//   let list = JSON.parse(localStorage.getItem("clientes"));

//   console.log(list);
// }

// function mostrarRegistro(datos) {
//   const registrado = document.getElementById("registrado");
//   registrado.innerHTML = `<h1>FELICIDADES</h1>
//                           <p>Sus datos han sido registrados exitosamente</p>
//                           <p>Nombre completo: ${datos.nombre}</p>
//                           <p>DNI: ${datos.dni}</p>`;
// }

/* Inicio del simulador */

//Mostramos la lista de los vehiculos para escoger con la función "mostrarAutos();"
mostrarAutos();

//Creamos una clase para su posterior uso en la función siguiente
// class Cliente {
//   constructor(nombre, dni, vehiculoElegido) {
//     this.nombre = nombre;
//     this.dni = dni;
//     this.vehiculoElegido = vehiculoElegido;
//   }
// }

//También declaro un array para poder almacenar los objetos de la clase Cliente
// const listaClientes = [];

//Aquí implemento constantes globales para su posterior uso en distintas funciones
// const formulario = document.getElementById("formulario");
// const nombre = document.getElementById("nombre");
// const dni = document.getElementById("dni");
// const auto = document.getElementById("auto");

/* Gracias al evento "submit", lo que hago aquí es recoger los valores enviados por el formulario, e instanciar
un nuevo objeto de la clase Cliente con dichos valores recogidos, para luego agregar el objeto creado en el 
array listaClientes por medio de la función ".push()" */
// datosCliente();

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

function buscarAuto(id) {
  const vehiculoElegido = cargarVehiculosLS();
  return vehiculoElegido.find((auto) => auto.id === id);
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
      Swal.fire({
        title: `¡Genial!`,
        icon: "success",
        showConfirmButton: false,
        timer: 2000,
      });
      seccionCompra(auto);
      registrarDatos(auto);
    }
  });
}

function seccionCompra(elegido) {
  const autoElegido = elegido;
  document.getElementById("autos").remove();

  document.getElementById(
    "p"
  ).innerText = `Muchas gracias por elegir uno de nuestros vehículos. Ahora, debe escribir sus datos personales solicitados para registrarlo como cliente, junto al monto total del dinero en los campos de texto. Luego, oprima el botón "Enviar y comprar" y será acreedor de su nuevo vehículo`;

  let eleccion = `<div class="card text-center theme-dark card-size">
                    <img src="${elegido.img}" class="card-img-top img-size" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${elegido.nombre}</h5>
                      <ul>
                        <li>Precio en dólares: $${elegido.precio}</li>
                        <li>Color de fábrica: ${elegido.colorDefault}</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <form id="form" class="formulario">
                      <label for="nombre">Introduzca su nombre:</label>
                      <input id="name" type="text" />
                      <label for="documento">Introduzca su DNI:</label>
                      <input id="dni" type="text" />
                      <p>Presione el siguiente botón. Una vez que lo haga, los datos serán registrados en nuestras oficinas y su dinero será extraído de su cuenta bancaria</p>
                      <button class="btn btn-primary">Comprar ($${elegido.precio})</button>
                    </form>
                  </div>`;

  const compra = (document.getElementById("compra").innerHTML = eleccion);
}

class Cliente {
  constructor(nombre, dni) {
    this.nombre = nombre;
    this.dni = dni;
  }
}

function registrarDatos(vehiculoElegido) {
  const formulario = document.getElementById("form");
  formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("name");
    const dni = document.getElementById("dni");

    const datosCliente = [nombre.value, dni.value];

    const registroCompra = datosCliente.concat(vehiculoElegido);

    const listaCompradores = [];
    listaCompradores.push(registroCompra);

    localStorage.setItem("comprador", JSON.stringify(listaCompradores));

    formulario.reset();
    finalizar();
  });
}

function finalizar() {
  let mensaje = `<h2>¡Felicidades!</h2>
                <p>Haz terminado el simulador con éxito. Si deseas repetirlo, presiona "F5" para volver a ver la lista de vehiculos</p>`;
  document.getElementById("despedida").innerHTML = mensaje;
}

/* Inicio del simulador */

//Mostramos la lista de los vehiculos para escoger con la función "mostrarAutos();"
mostrarAutos();

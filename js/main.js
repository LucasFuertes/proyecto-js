function listaDeAutos() {
  const contenedor = document.getElementById("contenedor");
  vehiculo.forEach((autos) => {
    const div = document.createElement("div");
    div.innerHTML = `<div>
                    <img src="${autos.img}" alt="">
                  </div>
                  <div>
                    <p>${autos.nombre}</p>
                    <p>$${autos.precio}</p>
                  </div>`;
    contenedor.appendChild(div);
  });
}

listaDeAutos();

class Cliente {
  constructor(nombre, dni, vehiculoElegido) {
    this.nombre = nombre;
    this.dni = dni;
    this.vehiculoElegido = vehiculoElegido;
  }
}

const listaClientes = [];

const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const dni = document.getElementById("dni");
const auto = document.getElementById("auto");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const cliente = new Cliente(nombre.value, dni.value, auto.value);

  listaClientes.push(cliente);

  formulario.reset();

  localStorage.setItem("clientes", JSON.stringify(listaClientes));
  let list = JSON.parse(localStorage.getItem("clientes"));
  console.log(list);
});

const vehiculos = [
  {
    id: 1,
    nombre: "1.- Chevrolet Corvette C6",
    precio: 300000,
    colorDefault: "Rojo",
    img: "./images/chevrolet_corvette-C6.jpg",
  },
  {
    id: 2,
    nombre: "2.- Toyota Supra",
    precio: 225500,
    colorDefault: "Gris",
    img: "./images/toyota_supra.jpg",
  },
  {
    id: 3,
    nombre: "3.- Mazda RX-7",
    precio: 250000,
    colorDefault: "Rojo",
    img: "./images/mazda_RX-7.jpg",
  },
  {
    id: 4,
    nombre: "4.- Audi Le mans Quattro",
    precio: 350000,
    colorDefault: "Gris",
    img: "./images/audi_le_mans_quattro.jpg",
  },
  {
    id: 5,
    nombre: "5.- Nissan 350Z",
    precio: 200000,
    colorDefault: "Azul",
    img: "./images/nissan_350Z.jpg",
  },
  {
    id: 6,
    nombre: "6.- BMW M3 E46",
    precio: 500000,
    colorDefault: "Gris",
    img: "./images/bmw_m3_e46.jpg",
  },
];

function guardarVehiculosLS(vehiculo) {
  localStorage.setItem("vehiculos", JSON.stringify(vehiculo));
}

function cargarVehiculosLS() {
  return JSON.parse(localStorage.getItem("vehiculos"));
}

guardarVehiculosLS(vehiculos);

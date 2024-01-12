const fs = require('fs');

function registrar(nombre, edad, tipo, color, enfermedad) {
  const citas = cargarCitas();
  const nuevaCita = { nombre, edad, tipo, color, enfermedad };
  citas.push(nuevaCita);
  guardarCitas(citas);
  console.log('Cita registrada con éxito.');
}

function leer() {
  const citas = cargarCitas();
  citas.forEach((cita, index) => {
    console.log(`Cita ${index + 1}:`);
    console.log(`Nombre: ${cita.nombre}`);
    console.log(`Edad: ${cita.edad}`);
    console.log(`Tipo: ${cita.tipo}`);
    console.log(`Color: ${cita.color}`);
    console.log(`Enfermedad: ${cita.enfermedad}`);
    console.log('------------------------');
  });
}

function cargarCitas() {
  try {
    const citasData = fs.readFileSync('citas.json', 'utf8');
    return JSON.parse(citasData);
  } catch (error) {
    return [];
  }
}

function guardarCitas(citas) {
  const citasData = JSON.stringify(citas, null, 2);
  fs.writeFileSync('citas.json', citasData);
}

module.exports = {
  registrar,
  leer
};

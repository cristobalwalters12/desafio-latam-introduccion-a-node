const operaciones = require('./operaciones');

const [, , operacion, ...args] = process.argv;

if (operacion === 'registrar') {
  const [nombre, edad, tipo, color, enfermedad] = args;
  operaciones.registrar(nombre, edad, tipo, color, enfermedad);
} else if (operacion === 'leer') {
  operaciones.leer();
} else {
  console.log('Operación no válida. Las operaciones válidas son "registrar" y "leer".');
}

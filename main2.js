let numeroDePersonas = Number(
  prompt("Coloque el numero de personas registradas")
);
console.log(`Numero de personas registradas: `, numeroDePersonas);

let edadTotal = 0;

for (let i = 1; i <= numeroDePersonas; i++) {
  let edad = Number(prompt(`Coloque la edad de la persona:`));
  console.log(edad);
  edadTotal += edad;
}

if (numeroDePersonas > 1) {
  let edadPromedio = edadTotal / numeroDePersonas;
  console.log(`Edad promedio:`, edadPromedio);
} else {
  console.log(`No hay personas registradas`);
}

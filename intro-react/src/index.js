const active = true;

// let mensaje = "";
// if (active) {
//   mensaje = "Activo";
// } else {
//   mensaje = "Inactivo";
// }

const mensaje = active ? "Activo" : "Inactivo";
console.log(mensaje);

const mensaje2 = !active && "Activo";
console.log(mensaje2);

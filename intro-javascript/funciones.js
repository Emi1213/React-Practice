function saludar(nombre) {
  return `Hola ${nombre}`;
}

console.log(saludar("Emilia"));

const saludar2 = function (nombre) {
  return `Adios ${nombre}`;
};

//Al agregar a la funcion una constante se puede llamar a la funcion con el nombre de la constante
console.log(saludar2("Daniel"));

const saludar3 = (nombre) => {
  return `Hola ${nombre}`;
};

console.log(saludar3("Pablo"));

const saludar4 = (nombre) => `Hola ${nombre}`;
console.log(saludar4("Jair"));

//Se puede usar el return sin escribirlo y se puede usar sin parentesis si solo se tiene un parametro, si tiene mas de un paratmetro o es un objeto se deben usar los parentesis
const getUser = () => ({
  id: 1801,
  username: "Emilia",
});

console.log(getUser());

function getUserActive(nombre) {
  return {
    id: 1801,
    username: nombre,
  };
}

const userActive = getUserActive("Matias");
console.log(userActive);

//Transformar getuserActive en una funcion de flecha y que retorne un objeto implicito

const getUserActive2 = (nombre) => ({
  id: "1213",
  nombre: nombre,
});

const user2 = getUserActive2("Jose");
console.log(user2);

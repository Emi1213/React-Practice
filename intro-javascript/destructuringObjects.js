const person = {
  name: "Tony",
  age: 45,
  key: "Ironman",
};

//This is the way to extract the properties of an object but it is very long
console.log(person.name);
console.log(person.age);
console.log(person.key);

//This is the way to extract the properties of an object
const { name, age, key } = person;
console.log(name);
console.log(age);
console.log(key);

//This is the way to extract the properties of an object and rename them
const { name: nombre, age: edad, key: clave } = person;
console.log(nombre);
console.log(edad);
console.log(clave);

// const returnPerson = (user) => {
//   console.log(user);
// };

const returnPerson = (user) => {
  const { name, age, key } = user;
  console.log(name, age, key);
};

const returnPerson2 = ({ name, age, key }) => {
  console.log(name, age, key);
};
returnPerson(person);
returnPerson2(person);

const useContext = ({ name, age, key }) => {
  return {
    nombreClave: key,
    anios: age,
    latlng: {
      lat: 14.1232,
      lng: -12.3232,
    },
  };
};

const {
  nombreClave,
  anios,
  latlng: { lat, lng },
} = useContext(person);

console.log(nombreClave, anios);
console.log(lat, lng);

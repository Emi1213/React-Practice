const name = "Pedro";

const person = {
  name: name,
  lastName: "Tite",
  age: 3,
  direction: {
    city: "Medellin",
    zipCode: 123456,
    lat: 14.3232,
    lng: 34.9233321,
  },
};

const persona2 = { ...person };
persona2.name = "Juan";

console.log(person);
console.log(persona2);

const character = ["Goku", "Vegeta", "Trunks"];
const [, , p3] = character;
console.log(p3); // Trunks

const [, p2] = character;
console.log(p2); // Vegeta

//It is destructuring an array, use the comma to skip the first element or skip any element in the position that you want use the number of commas that you want to skip the elements

const returnArray = () => {
  return ["ABC", 123];
};

console.log(returnArray()); // [ 'ABC', 123 ]
const [letters, numbers] = returnArray();
console.log(letters, numbers); // ABC 123

//Homework
//1. The first value of the array will be the name of the state (name)
//2. The second value will be a function that will be called setstate
const useState = (name) => {
  return [
    name,
    () => {
      console.log(`Hello ${name} `);
    },
  ];
};

console.log(useState("Goku")); // [ 'Goku', [Function (anonymous)] ]

const arr = useState("Goku");
arr[1](); // Hello World

const [name, setName] = useState("Goku");
console.log(name); // Goku
setName(); // Hello Goku

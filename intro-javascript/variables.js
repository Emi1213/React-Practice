const name = "Pedro";
const lastName = "Tite";
const age = 3;
const fullName = `${name} ${lastName}`;
const fullData = `${name} 
${lastName} 
${age}
${1 + 1}`;

function getAllData(nam, lastNam, ages) {
  return `${nam} ${lastName} ${ages}`;
}

console.log(getAllData(name, lastName, age));

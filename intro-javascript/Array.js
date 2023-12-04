const array1 = [];
array1.push(1);
array1.push(2);
array1.push(3);

//pop method removes the last element from an array and returns that element.
array1.pop();

const array2 = [4, 5, 6];
const array3 = array2.concat(7);
const array4 = [...array3, 8, 9, 10];
const numberDuplicate = array4.map(function (number) {
  return number * 2;
});

console.log(numberDuplicate);
array3.splice();

console.log(array1);
console.log(array2);
console.log(array3);

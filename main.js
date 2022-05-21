// const data = [
//   {
//     name: 'Denis',
//     surname: 'Viskov',
//     age: 26,
//     city: 'Riga'
//   },
//   {
//     name: 'Zlata',
//     surname: 'Jolkina',
//     age: 20,
//     city: 'Ogre'
//   }
// ];

// function filterValues(arrName, array) {
//   const filtered = array.filter((item) => {
//     const name = item.name;
//     if (name.toUpperCase().includes(arrName.toUpperCase())) {
//       return true;
//     }
//   });
//   return filtered;
// }
// const result4 = filterValues('deni', data);
// console.log(result);



// Write a function that takes two numbers (min and max) as arguments
// Return an array of numbers in the range min to max


function myFunction(min, max) {
  let arr = [];
  for (let i = min; i <= max; i++) {
    arr.push(i);
  }
  return arr;
}
let result3 = myFunction(2, 8);
console.log(result3)
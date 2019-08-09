const array = [4, 5, 7, 8, 14, 45, 76];
const myarray = [];
const evenindex = (myarray) => {
  for (let i = 0; i < array.length/2; i++) {
    myarray.push(array[2 * i]);
    console.log(2*i);
  }
  return myarray;
}
// console.log(array);
console.log(evenindex(myarray));

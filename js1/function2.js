// const array=[5, 67, 234, 55, 0, 90, 23];
//
//
// const square = (myarray) => {
//
//   for(let i=0; i<myarray.length; i++){
//     myarray[i]=myarray[i]*myarray[i];
//   }
//
//   return myarray;
// }
// console.log(array)
// console.log(square(array));



const array = [2,4,5,7,14,9];

const numbers = (myarray) =>{

  let count =0;
  for(let i=0; i<myarray.length; i++){
    if(myarray[i]%2 === 0){
      count++;
      console.log(myarray[i]);
    }
  }
  console.log(count)
  return count;
}
// console.log(array)
console.log(numbers(array), 'answer');

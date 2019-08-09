const array =[];
let count =0;
for (let i=1000; i<9000; i++){
  const object={};
  if (i%13 ===0){
      count++;
    object[count]= i;
   array.push(object);
  }
}
console.log(array);

// const myFunction = (start, end, divisibleBy) =>{
//   const array =[];
//   let count =0;
//   for (let i=start; i<end+1; i++){
//     const object={};
//     if (i%divisibleBy ===0){
//         count++;
//       object[count]= i;
//      array.push(object);
//     }
//   }
//   return array;
// }
// const a = myFunction(1000, 9000, 13);
// const b = myFunction(1,200,3);
//
// console.log(a, 'a');
// console.log(b, 'b');

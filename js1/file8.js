// const array =[];
// for (let i=1; i<101; i++){
//   if (i%2 ===0){
//     if(i%5 ===0){
//       console.log("i",i);
//       array.push(i);
//
//     }
//
//   }
//
// }
// console.log(array)

const myFunction = (start,end,divisiblevalue1,divisiblevalue2) => {
  const array =[];
  for (let i=start; i<end; i++){
    if (i%divisiblevalue1 ===0){
      if(i%divisiblevalue2 ===0){
        console.log("i",i);
        array.push(i);
      }

    }

  }
  return array;

}
const a = myFunction(1,101,2,5)
  console.log("a",a)

const b = myFunction(1,200,2,6);
 console.log("b",b)

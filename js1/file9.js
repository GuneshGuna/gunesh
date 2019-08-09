// const object = { };
// let count =0;
// for (let i=2021; i<3022; i++){
//   const object1={};
//   if (i%11 ===0){
//     count++;
//     object1.count = count;
//     object1.number = i;
//    object[count] = object1;
//   }
//   //console.log(object1);
// }
// console.log(object);
//
const myFunction = (value1,value2,divisibleBy) =>{
  const object = { };
  let count =0;
  for (let i=value1; i<value2+1; i++){
    const object1={};
    if (i%divisibleBy ===0){
      count++;
      object1.count = count;
      object1.number = i;
     object[count] = object1;
    }
  }
  return object;

}

const a = myFunction(2190, 2219, 3);
const b = myFunction(1, 600, 4);

console.log(a, 'a');
console.log(b, 'b');

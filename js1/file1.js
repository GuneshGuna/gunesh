//
// let product = 1;
// for (let i=1 ;i<26 ;i++){
//   if(i%5 === 0){
//     product = product*i;
//   }
// }
// console.log(product);
//
//  let sum = 0;
// for (let i=14 ;i <37 ;i++){
//   if(i%2 !== 0){
//     sum = sum + i;
//   }
// }
// console.log(sum);
let count =0;
let result =0;
for(let i=1; i < 100; i++){
  if(i%2 === 0){
    count++;
    console.log('count'count);
    console.log('i', i);

    if(count === 5){
      console.log('setting result', i)
      result = i;
    }

  }
}

let remainder = result%3;
console.log(remainder);
// console.log(remainder)
// product = 1;
// for (let i=11 ;i <100 ;i++){
//   if(i%7 === 0){
//     product = product*i
//   }
// }
// console.log(product)

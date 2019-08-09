let array =[13,19,11,21,39,17,37,99,101,43,47,69,93,97];
let product =1;
for (let i=0; i<array.length; i++){
  if (i%3 ===0){
    product=product*array[i]


  }
}
console.log(product);

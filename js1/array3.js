const array =[1,2,3,4,5];
let sum = 0;
  let product =1;
   let result =0;
for(let i= 0; i< array.length; i++) {
    sum = sum + array[i];
      product = product * array[i];
        result = result + sum + product ;
}
console.log(sum);
console.log(product);
console.log(result);

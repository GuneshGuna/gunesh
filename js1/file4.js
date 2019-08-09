let count =0;
let result =0;
let product =1;
for(let i=1; i < 10; i++){
  if(i%2 !== 0){
    count++;
    console.log("count",count);
    console.log("i",i);
    product=product*i

    if(count === 4){
      console.log('setting result', i)
      result = product;
    }

  }
}

console.log(product);
console.log(result);

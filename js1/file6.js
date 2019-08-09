let product = 1;
let result = 0;
let count = 0 ;
for (let i=2019; i<3020; i++){
  if (i%2 !==0){
    if (i%11 ===0){
        count++
      console.log("count",count)
      console.log("i",i)
      product=product*i;

      if(count ===25){
        console.log("setting result",i)
        result=product;
      }
    }

  }
}
console.log(product);
console.log(result);

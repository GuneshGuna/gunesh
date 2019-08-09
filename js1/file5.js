let sum=0;
let count=0;
let result=0;
for (let i=2019; i<6020; i++ ){
  if (i%2 ===0){
  if (i%3 ===0){
    sum=sum+i;
    count++
    if(count === 100){
      result=sum;
    }
  }

  }
}
console.log(result);

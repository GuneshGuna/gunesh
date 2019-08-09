let count = 0;
let result =0;
for(let i=2019; i < 5000; i++){
  console.log(i);

  if(i%11 === 0){
    count++;
    console.log(count);
    console.log(i);

    if(count === 87){
      console.log('setting result', i)
      result = i;
    }

  }
}

let remainder = result;
console.log(remainder);

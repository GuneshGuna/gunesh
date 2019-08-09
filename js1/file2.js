let count =0;
let product =1;
let result =0;
for(let i=1421; i < 1504; i++){
  if(i%2 !== 0){
    count++;
    console.log('count', count);
    console.log('i', i);

    if(count === 16){
      console.log('setting result', i)
      result1 = i;
    }

  }
}

 count =0;
 product =1;
 result =0;
for(let i=2019; i < 2191; i++){
  if(i%2 === 0){
    count++;
    console.log('count', count);
    console.log('i', i);

    if(count === 11){
      console.log('setting result', i)
      result2 = i;
    }

  }
}

product =product*result1*result2
console.log(product);

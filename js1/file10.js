const array =[];
let count =0;
for (let i=2190; i<2220; i++){
  const object={};
  if (i%3 ===0){
    count++;
    object.count = count;
    object.number = i;
    array.push(object);
  }
}
console.log(array)



const myFunction = (start, end, divisibleBy) =>{
  const array =[];
  let count =0;
  for (let i=start; i<end+1; i++){
    const object={};
    if (i%divisibleBy ===0){
      count++;
      object.count = count;
      object.number = i;
      array.push(object);
    }
  }

  return array;
}


const a = myFunction(2190, 2219, 3);
const b = myFunction(2190, 6000, 3);

console.log(a, 'a');
console.log(b, 'b');

const array = [{key:24},{key:22},{key:20}];
const myarray = [];
const numbers = (myarray) => {
  for (let i=0; i< array.length; i++){
    console.log(i);
    object = array[i];
    console.log(object.key);
    myarray.push(object.key);


  }
  return myarray;


}
console.log(numbers(myarray));

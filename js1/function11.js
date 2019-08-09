const array = [21,22,25,23,21,22,26];
const myarray = [];
for (let i=0; i<array.length; i++){
  if (myarray.indexOf(array[i])=== -1){
    myarray.push(array[i]);
  }
}
console.log(myarray);
 

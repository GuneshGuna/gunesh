const array = [1,11,17,4,15,21,7];
let highvalue = 0;
let highindex = 0;
for (let i=0; i< array.length; i++){
  if (array[i] > highvalue){
    highvalue = array[i];
    highindex = i;
  }
  console.log("i",i);
  console.log("count",array[i]);

}
console.log(highindex)
// const object = {key:"gunesh", key: "sdfsf"};
// console.log(object.key)

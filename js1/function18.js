const array = [1,3,5,6,7,8,9,10,11,13,14,15,17,18,19];
let leastvalue=999999999999999999999;
for (i=0; i<array.length; i++){
  if (array[i]%3 === 0){
    if (leastvalue > array[i]){
      leastvalue = array[i]
    }
  }
}
  console.log(leastvalue);
// const string = "my name is gunesh"
// const mystring = string.split(' ');
// let word = 0;
// for (let i = 0; i < mystring.length; i++){
//   console.log(i)
//   if (mystring.indexOf()=== -1){
//
//   };
//
// };
// console.log(mystring);

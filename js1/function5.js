const array =
[{num1:1,num2:21},
 {num1:33,num2:3},
 {num1:3,num2:88}];
 const myarray = [];
 for (let i=0; i< array.length; i++ ){

     object = array[i];
   console.log(object);
   console.log(Math.max(object.num2, object.num1));
   myarray.push(Math.max(object.num2, object.num1));


 }
console.log(myarray)

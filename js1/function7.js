const array = [5,7,2,9,11,13, 46, 90];
    let result =0 ;
const numbers = (result) => {
  let sum = 0;
  let count = 0;
  // let result =0 ;
 for (let i =0; i< array.length; i++){
   if (array[i] % 2 === 0){
     count++;
     console.log("count",count);
     console.log("i",i);
     sum = sum + array[i]
     if (count <= 2 ){
       console.log("setting result",i)
       result = sum ;
     }

   }
 }
 console.log(result);
 return result;


}
 console.log(numbers(result));

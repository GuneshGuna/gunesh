const array= [2,3,5,7,11,13];
let a = 0;
 let b =0;


for(let i= 0; i< array.length; i++) {
    a = a+b+array[i];
    b = a+b+array[i];
}
console.log(a,b);
for(let i= 0; i< array.length; i++) {
b = a+b+array[i];
a = a+b+array[i];
}
console.log(a,b);

 a = 1;
 b = 1;
for(let i= 0; i< array.length; i++) {

    a = a * b * array[i];
    b = a * b * array[i];
}
console.log(a,b);
const object = {
  sum: [1,2,3,4,5,6],
  product:{a:1.850393968490377e+95,  b:6.164324005500571e+154},
  result:['2019','2020','2021'],

};
console.log(object);

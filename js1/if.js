const a = true;
const b = false;

if(a){
  console.log(a, 'a');
}
if(b){
  console.log(b, 'b');
}


const array = ['G', 'U', 'N', 'E', 'S', 'H'];

for(let i=0; i <= array.length; i++){
  if(i === 2) {
    array[i] = 'I';
  }
}

console.log(array);

const c = 1;
const d = '1';

if(c === d) {
  console.log(true, c, d);
} else {
  console.log('inside else');
}

if( c === d){
  console.log('inside if');

} else if (c == d) {
  console.log('inside else if');

} else {
  
  console.log('inside else');
}

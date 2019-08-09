const string = 'JavaScript is the programming language';
const mystring = string.split(" ");
let longestword = ' ';
let index = 0;
for (let i=0; i<mystring.length; i++){
  if(mystring[i].length > longestword){
    longestword = mystring[i].length;
    index=i;

  }
}

console.log(mystring[index]);

const string = 'gunesh is a good boy fish is good';


const getLength = (myString) => {
  const array = string.split('');
  return array.length;
}

const length = getLength(string);
console.log(length);

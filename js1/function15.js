const array = [
{key1: 44, key2: 33},
{key1: 11, key2: 21, key3: 33, key4: 51},
{key1: 22, key2: 44, key3: 14},
{key1: 33}
];
let index = 0;
let maxlength = 0;
for (let i=0; i< array.length; i++){
  const object  = array[i];
  const objectKeysArray = Object.keys(object);
  const objectKeysArrayLength =  objectKeysArray.length;

  if(objectKeysArrayLength > maxlength) {
    maxlength = objectKeysArrayLength;
    index = i;
  }
  console.log(objectKeysArray)
};



console.log(array[index])

const object = {
  name:'p m s gunesh',
  age: 22,
  city: 'bangalore',
  state: 'karnataka',

};
const temp = object.name;
object.name=object.age;
object.age=object.city;
object.city=object.state;
object.state=temp;
console.log(object);

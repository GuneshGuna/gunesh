const object ={
  name: ['july','feb','dec'],
  age: {
    boy:22,
    girl:24,
  },
  city:{
    karnataka:['bangalore','mangaluru'],
    AndhraPradesh:['visakhapatnam','vijayawada'],
  },
  country:['australia','brezil','india'],
  year: 2019,

}
const temp=object.city
object.city=object.name

object.year=temp
console.log(object);

const firstfunction = () => {
  console.log("firstfunction");
}


const myfunction =(input) => {
  input();
  console.log(input,"input")
  return 2;

}


const value = myfunction(firstfunction)
// console.log(value)

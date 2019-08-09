const string ="gunesh2"
const half = (string) => {
  const array = string.split("");
  console.log(array)
  return string.slice(0, Math.ceil(string.length/2));
}
console.log(string);
console.log(half(string));

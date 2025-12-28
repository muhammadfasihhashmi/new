function add(name = "ahmad", age = 23) {
  console.log(name);
  console.log(age);
  console.log("shdj");
}
add();
add("fasih", 23);

function sum(a, b, ...rest) {
  console.log(rest);

  return a + b;
}
let abs = sum(23, 23, 34, "hgdjj", 34);

console.log(abs);

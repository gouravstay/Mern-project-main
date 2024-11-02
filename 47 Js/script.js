// async function getData(){
// return new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(122)
//   }, 2500);
// })
// }
async function getData() {
  let x = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let data = await x.json();
  console.log(data);
}

//make it with async functions
async function main() {
  console.log("Loading modules");

  console.log("Do something else");

  console.log("Load data");
  let data = await getData();

  console.log(data);

  console.log("Process data");

  console.log("task 2");
}
main();

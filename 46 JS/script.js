
console.log("Gaurav is haccker");
console.log("rohan is hacker");

//async function
setTimeout(() => {
  console.log("I am timeout inside!");
}, 0);
setTimeout(() => {
  console.log("sorry, I'm under the timeout!");
}, 2000);

console.log("That's all vro");

//   const loadScript = (src, callback) => {
//     let sc = document.createElement("script");
//     sc.src = src;
//     sc.onload = callback("gaurav");
//     document.head.append(sc)
//   }

//   loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback) 

// callback
const loadScript = (src, callback) => {
let script = document.createElement("script");
script.src = src;

// Set up the onload event handler to call the callback function
script.onload = () => {
  // Call the callback function when the script is loaded
  callback("gaurav");
};

// Append the script element to the document head
document.head.appendChild(script);
};

// Define your callback function
function myCallback(name) {
console.log("Script loaded! Hello,", name);
}

// Call the loadScript function and pass your callback function
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", myCallback);

//pyramid of doom (like, callback func to after callback functions)






let a = prompt("enter a first number")

let b = prompt("enter a second number")

if(isNaN(a) || isNaN(b)){
   throw SyntaxError("sorry this will not avaliable")
}
let sum = parseInt(a) + parseInt(b)


try {
    console.log("the sum is ", sum*x)
    
} catch (error) {
    console.log('error aa gaya bhai');
    
}


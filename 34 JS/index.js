function nice(name){
    console.log("Hey " + name +  " your t-shirt is nice")
    console.log("Hey " + name +  " you are looking good")
    console.log("Hey " + name +  " your car is nice")
    console.log("Hey " + name +  " your bottle looking good")
}

function sum(a, b, c = 3){
    // console.log( a + b)
    return a + b + c
}


result1 = sum(3, 5)
result2 = sum(4, 7)
result3 = sum(5, 9, 1)


console.log("The sum of these number is: ", result1)
console.log("The sum of these number is: ", result2)
console.log("The sum of these number is: ", result3)


// varriable with functions
const func1 = (g) =>{
    console.log("I am an arrow function", g)
}

func1(34);
func1(66);
func1(88);
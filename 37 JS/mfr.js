// map function

let arr = [1, 3, 5, 7, 11, 15]
// let newArr = []

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2)
    
// }
let newArr = arr.map((e)=>{
    return e**2;
})
console.log(newArr)


// filter function
const graterThanSeven = (e)=>{
    if(e>7){
        return true
    }
    return false
}
console.log(arr.filter (graterThanSeven))

// reduce methode like when we are run in function runs with value
let arr3 = [1, 6, 8, 12]

const red = (a, b)=>{
    return a*b
}

console.log(arr3. reduce(red))

// array from like, any obj convert in arrays

let c = ("gaurav")
console.log(Array.from(c))
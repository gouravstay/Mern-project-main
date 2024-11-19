let arr = [1, 2, 4, 6, 8]
//Index =  0, 1, 2, 3, 4

arr[0] = 7887
console.log(arr, typeof arr); // arrays are imutable
console.log(arr.length)

console.log(arr[0])
console.log(arr[2])
console.log(arr[4])


// convert arrays to string
console.log(arr.toString())

 // array join
console.log(arr.join(" and "))

// array pop remove last
let  a = [5, 8, 9, 2]
console.log(a.pop())
console.log(a)

// array push
let b = [6, 8, 3, 5]
console.log(b.push(7))
console.log(b.push("gaurav"))
console.log(b)

// array shift  remove first
console.log(b.shift())
console.log(b)

// array unshift add string fisrt
console.log(b.unshift("Sinox"))
console.log(b)

// concat the arrays
let a1 =  [1, 2, 3]
let a2 =  [4, 5, 6]
let a3 =  [7, 8, 9]

console.log(a1.concat(a2, a3))

// arrays sort
let e = [3, 2, 7, 9, 1]
console.log(e.sort())


// arrays splice index delet
let numbers = [1, 2, 3, 4, 5]
// console.log(numbers.splice(1, 2))
// console.log(numbers)

// console.log(numbers.splice(1, 4, 78, 69))

console.log(numbers.splice(1, 3, 222, 333))
console.log(numbers)

//array slice count stat 3
const num = [1, 3, 4, 5, 6]
console.log(num.slice(3))

//reverse element or array
let number = [1, 3, 4, 6, 8]
console.log(number.reverse())
let a = [1, 44, 67, 89]

let obj =  {
    a : 1,
    b: 2,
    c: 3
}


// for-in loops
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(element)
    }
}

//for-of loops
for (const iterator of a) {
    console.log(iterator)
}


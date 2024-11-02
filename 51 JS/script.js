console.log('Hello world');

//IIFE in JS
async function sleep(){
    return new Promise ((resolve, reject) =>{
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}

//spread oparator
function sum (a, b, c)
{
    return a + b + c;
}
(async function main(){ // IIFE imidiate async functions

    // let a = await sleep()
    // console.log(a)
    // let b = await sleep()
    // console.log(b)
    

// Destructuring with arrays
    // let [x, y, ...rest] = [1, 5, 6, 7, 8, 12]
    // console.log(x, y, rest); // rest (like, varriable)


    // Destructuring with objects
    let obj = {
        a: 1,
        b: 2,
        c: 3,
    }
    
    let a, b = obj
    console.log(a, b);
    
     // spreade oparator
    let arr = [1, 6, 12]
    console.log(sum(arr[0], arr[1], arr [2]))
    console.log(sum(...arr))
    
    
    
})()

// Hosting









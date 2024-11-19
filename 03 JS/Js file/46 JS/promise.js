// promise

// promise of cod eexcutions

// alert('This is promis function');

console.log('hello');


let prom1 = new Promise((resolve, reject) =>{
    setTimeout(() => {

  console.log("hii, gaurav ,I am done")
  resolve("hello Gaurav, problem is resolved")
  
    }, 3000)
})

// ".then" while all function are run what to do that
prom1.then((a) => {
    console.log(a)

// ".catch" while your code runing, faceing some error what to do that
}).catch((err)=>{
   console.log(err)
})


// promise API

//promise all

// promise. all settled (Like , anything came to you, your promise resolve or reject all status came to you)

// promise .race

// promise.any(promise)

// promise. resolve(value)

// promise. reject(error)
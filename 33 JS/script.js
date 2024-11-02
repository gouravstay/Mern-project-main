console.log("hello");

// let a = 1;
// for (let i = 0; i < 100; i++) {
//     console.log(a+i);
    
// }

let obj = {
    name: 'Yash',
    role: 'programmer',
    company: 'Yash AI'
}
for(const key in obj){
    const element = obj[key]
    
    console.log(key, element)
}

// While-loop

// let i = 0;
// while(i<6){
//     console.log(i)
//     i++;
// }

// do-while-loop
let i = 10;
do{
    console.log(i)
    i++;
}
 while (i<6);
    

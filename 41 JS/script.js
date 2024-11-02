console.log('Hello world')

document.getElementById('redbox').style.backgroundColor = "red" // getElementByID targeting particular Id
document.getElementById('greenbox').style.backgroundColor = "green" 


//quertSellector target maches first box
// document.querySelector('.box').style.backgroundColor = "green"


// target all boxes with use for loops
console.log(document.querySelectorAll('.box'))

document.querySelectorAll('.box').forEach(e =>{
 e.style.backgroundColor = "#c1e1de"

})

getElemetsByTagname & this one return node realname
document.getElementsByTagName ("div")
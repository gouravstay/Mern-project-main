// console.log('Hello gaurav');

// // object with prototype (like, objects additional property)

// let obj = {
//     a: 1,
//     b: "gaurav"
// }

// console.log(obj)

//  let animal ={ // objects
//     eats: true  // prototype
// };

// let lions ={
//     jump: true
// }

// lions.__proto__ = animal;


// class and object in Js

 
class Human{  // Oops class in js
    constructor(name){ // add argument
        this.name = name  // to create property in object
        console.log("object is created...")
    }

    eats(){
        console.log("something i eat now")
    }

    find(){
        console.log("something i seekout now")
    }
}

class homo extends Human {
    constructor(name){ // add argument
        super(name)
        this.name = name  // to create property in object
        console.log("new object is created, he is new homo...")
    }
    
    eats(){
        super.eats()  // super keyword (like, run any super class method & call parent constructor)
        console.log("something i eat now, dnd")
    }

}


let a = new Human('gaurav');
console.log(a);


let h = new homo("rehan")
console.log(h);


// Method overriding (like, somthing add to your preivious code)


// static method


// Getters and Setters
class User {
   constructor(name){
    //invokes the setter
    this.name = name;
   }

   get name (){
    return this.__name; // add prototype __
   }

   set name (value){
     if(value.length < 6){
        console.log('Name is too short.');
        return;
     }
     this.__name = value;
   }
}

let user = new User("rohan");
console.log(user.name);


user.name = "gaurav"
console.log(user.name);


// Instenceof operator  (like, obj > instenceof > class)

// a  Instenceof human true

// a  Instenceof homo false

 

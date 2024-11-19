console.log("Hello world")


    let btn = document.getElementById("btn");

    btn.addEventListener("dblclick", () => {
      document.querySelector(".box").innerHTML = "<b> Hey you are clicked </b> Thank you for clicking me!";
    });

    // btn.addEventListener("contextmenu", () => {
    //   alert("Dont hack us right click pls")
    // });

  Element.onclick = function(){
    alert("yes")
   };
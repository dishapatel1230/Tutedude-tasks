const greeting = document.getElementById("greeting");
const input = document.getElementById("nameInput");
const button = document.getElementById("greetBtn");

button.addEventListener("click",function(){

   const name = input.value.trim();

   if (name === "") {
        greeting.innerText = "Hello";
    } else {
        greeting.innerText = `Hello, ${name}`;
    }

});

const boxes = document.querySelectorAll(".box");

boxes.forEach(function (box){

        box.addEventListener("click", function(){
     const color = box.dataset.color;

        box.style.backgroundColor = color;

        if(color === "yellow"){
            box.style.color = "black";
        }
        else{
            box.style.color = "white";
        }
        
      });

});
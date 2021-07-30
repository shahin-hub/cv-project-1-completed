//navigation bar sticky fixed by scrolling//

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  }else{
    navbar.classList.remove("sticky")
  } 
}

//send message button//

let msgBtn = document.getElementById("send-message");
let checkIcon = document.querySelector(".fa-check");

let audio = new Audio("sounds/never-50672.mp3"); //audio
let count = 0; //count

msgBtn.addEventListener("click",changeColor);

function changeColor(event){
   
    count++;
    console.log(count);

    setTimeout(function(){
    
    msgBtn.style.transform = "scale(1)"
    msgBtn.style.backgroundColor ="#FFFFF3";
    msgBtn.style.color = "#04e904f3";
    msgBtn.style.border = "1px solid #04e904f3";
    msgBtn.value = "Your message has been sent.";

    checkIcon.style.display = "block";
    checkIcon.style.backgroundColor = "transparent";
    checkIcon.style.border = "1px solid #04e904f3";
    checkIcon.style.color = "#04e904f3";
    checkIcon.style.left = "62%";

    if (count == 1) {
       audio.play();
     } else {
       audio.pause();
     }

    },500)

};

//sub menu skills menu

let subMenu = document.querySelector(".sub-menu");
let skillsMenu = document.getElementById("skills");
let upMenu = document.querySelector(".fa-caret-up");
let x = 0;

skillsMenu.addEventListener("click",function(){

   x++;
   if(x%2 == 1){
      subMenu.style.top = "12%";
      servicesSubMenu.style.top = "-50%";
   }else{
      subMenu.style.top = "-50%";
   }

})

//sub menu for services menu

let servicesSubMenu = document.querySelector(".services-sub-menu");
let servicesMenu = document.getElementById("services");
let a = 0;

servicesMenu.addEventListener("click",function(){

  a++;
  if(a%2 == 1){
      servicesSubMenu.style.top = "12%";
      subMenu.style.top = "-50%"
  }else{
    servicesSubMenu.style.top = "-50%";
  }

})





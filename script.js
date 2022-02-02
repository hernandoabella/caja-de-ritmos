const numeroDeBotones = document.querySelectorAll(".drum").length;
const soundInfo = document.querySelector('.sound__info');

for (let i = 0; i < numeroDeBotones; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    let buttonInnerHTML = this.innerHTML;
    crearSonido(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keypress", function(event) {
  crearSonido(event.key);
  buttonAnimation(event.key);
});

function crearSonido(key) {
  switch (key) {
    case "q":
      let sonido1 = new Audio("sounds/sound1.mp3");
      soundInfo.innerHTML = sonido1.src.substring(32, 43);
      sonido1.play();
      break;
    case "w":
      let sonido2 = new Audio("sounds/sound2.mp3");
      sonido2.play();
      soundInfo.innerHTML = sonido2.src.substring(32, 43);
      break;
    case "e":
      let sonido3 = new Audio("sounds/sound3.mp3");
      sonido3.play();
      soundInfo.innerHTML = sonido3.src.substring(32, 43);
      break;  
    case "r":
      let sonido4 = new Audio("sounds/sound4.mp3");
      sonido4.play();
      soundInfo.innerHTML = sonido4.src.substring(32, 43);
      break;  
    case "t":
      let sonido5 = new Audio("sounds/sound5.mp3");
      sonido5.play();
      soundInfo.innerHTML = sonido5.src.substring(32, 43);
      break;
    case "y":
      let sonido6 = new Audio("sounds/sound6.mp3");
      sonido6.play();
      soundInfo.innerHTML = sonido6.src.substring(32, 43);
      break;
    case "u":
      let sonido7 = new Audio("sounds/sound7.mp3");
      sonido7.play();
      soundInfo.innerHTML = sonido7.src.substring(32, 43);
      break;
    case "i":
      let sonido8 = new Audio("sounds/sound8.mp3");
      sonido8.play();
      soundInfo.innerHTML = sonido8.src.substring(32, 43);
      break;  
    case "a":
      let sonido9 = new Audio("sounds/sound9.mp3");
      sonido9.play();
      soundInfo.innerHTML = sonido9.src.substring(32, 43);
      break;
    case "s":
      let sonido10 = new Audio('sounds/sound10.mp3');
      sonido10.play();
      soundInfo.innerHTML = sonido10.src.substring(32, 43);
      break;
    case "d":
      let sonido11 = new Audio('sounds/sound11.mp3');
      sonido11.play();
      soundInfo.innerHTML = sonido11.src.substring(32, 43);
      break;
    case "f":
      let sonido12 = new Audio("sounds/sound12.mp3");
      sonido12.play();
      soundInfo.innerHTML = sonido12.src.substring(32, 43);
      break;  
    case "g":
      let sonido13 = new Audio('sounds/sound13.mp3');
      sonido13.play();
      soundInfo.innerHTML = sonido13.src.substring(32, 43);
      break;
    case "h":
      let sonido14 = new Audio('sounds/sound14.mp3');
      sonido14.play();
      soundInfo.innerHTML = sonido14.src.substring(32, 43);
      break;
    case "j":
      let sonido15 = new Audio('sounds/sound15.mp3');
      sonido15.play();
      soundInfo.innerHTML = sonido15.src.substring(32, 43);
      break;
    case "k":
      let sonido16 = new Audio('sounds/sound16.mp3');
      sonido16.play();
      soundInfo.innerHTML = sonido16.src.substring(32, 43);
      break      
    default: console.log(key);
  }
}

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
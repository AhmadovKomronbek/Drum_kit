var drumlenght = document.querySelectorAll(".drum").length;

for (var i = 0; i <drumlenght; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    Sound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  Sound(event.key);

  animation(event.key);

});

function Sound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-0.mp3");
      tom1.play();
      m1();
      m6();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-1.mp3");
      tom2.play();
      m2();
      m7();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-2.mp3');
      tom3.play();
      m3();
      m8();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-3.mp3');
      tom4.play();
      m4();
      m9();
      break;

    case "j":
      var snare = new Audio('sounds/tom-4.mp3');
      snare.play();
      m1();
      m4();
      m5();
      m6();
      m10();
      break;

    case "k":
      var crash = new Audio('sounds/tom-5.mp3');
      crash.play();
      m1();
      m2();
      m3();
      m4();
      m5();
      m6();
      m7();
      m8();
      m9();
      m10();
      break;

    case "l":
      var kick = new Audio('sounds/tom-6.mp3');
      kick.play();
      m7();
      m2();
      break;

    default: console.log(key);
  }
}

function animation(currentKey) {

  var activeBtn = document.querySelector("." + currentKey);
  activeBtn.classList.add("pressed");
  setTimeout(function () {
    activeBtn.classList.remove("pressed");
  }, 100)
}

function m1(){
  var m1 = document.getElementById("m1").style.transform = "scaleY(3)";
  setTimeout(function () {
    var m1 = document.getElementById("m1").style.transform = "scaleY(1)";
  }, 100);
}
function m2(){
  var m2 = document.getElementById("m2").style.transform = "scaleY(3)";
  setTimeout(function () {
    var m2 = document.getElementById("m2").style.transform = "scaleY(1)";
  }, 100);
}
function m3(){
  var m3 = document.getElementById("m3").style.transform = "scaleY(3)";
  setTimeout(function () {
    var m3 = document.getElementById("m3").style.transform = "scaleY(1)";
  }, 100);
}
function m4(){
  var m4 = document.getElementById("m4").style.transform = "scaleY(3)";
  setTimeout(function () {
    var m4 = document.getElementById("m4").style.transform = "scaleY(1)";
  }, 100);
}
function m5(){
  var m5 = document.getElementById("m5").style.transform = "scaleY(3)";
  setTimeout(function () {
    var m5 = document.getElementById("m5").style.transform = "scaleY(1)";
  }, 100);
}
function m6(){
  var m6 = document.getElementById("m6").style.transform = "scaleY(3)";
  setTimeout(function () {
    var m6 = document.getElementById("m6").style.transform = "scaleY(1)";
  }, 100);
}
function m7(){
  var m7 = document.getElementById("m7").style.transform = "scaleY(3)";
  setTimeout(function () {
    var m7 = document.getElementById("m7").style.transform = "scaleY(1)";
  }, 100);
}
function m8(){
  var m8 = document.getElementById("m8").style.transform = "scaleY(3)";
  setTimeout(function () {
    var m8 = document.getElementById("m8").style.transform = "scaleY(1)";
  }, 100);
}
function m9(){
  var m9 = document.getElementById("m9").style.transform = "scaleY(3)";
  setTimeout(function () {
  var m9 = document.getElementById("m9").style.transform = "scaleY(1)";
  }, 100);
}
function m10(){
  var m10 = document.getElementById("m10").style.transform = "scaleY(3)";
  setTimeout(function () {
  var m10 = document.getElementById("m10").style.transform = "scaleY(1)";
  }, 100);
}

var btn = document.getElementById("btn");
btn.addEventListener("click" , function(){
  setTimeout(function () {
    tom0();
  }, 50);
  setTimeout(function () {
    tom3();
  }, 250);
  setTimeout(function () {
    tom2();
  }, 450);
  setTimeout(function () {
    tom0();
  }, 650);
  setTimeout(function () {
    tom5();
  }, 850);
  setTimeout(function () {
    tom6();
  }, 1050);
  setTimeout(function () {
    tom5();
  }, 1250);
  setTimeout(function () {
    tom6();
  }, 1450);
  setTimeout(function () {
    tom6();
  }, 1650);
  setTimeout(function () {
    tom6();
  }, 1850);
  setTimeout(function () {
    tom6();
  }, 2050);
  setTimeout(function () {
    tom5();
  }, 2250);
  setTimeout(function () {
    tom1();
  }, 2450);
  setTimeout(function () {
    tom1();
  }, 2650);
  setTimeout(function () {
    tom5();
  }, 2850);
  setTimeout(function () {
    tom0();
  }, 3050);
  setTimeout(function () {
    tom1();
  }, 3250);
  setTimeout(function () {
    tom2();
  }, 3450);
  setTimeout(function () {
    tom3();
  }, 3650);
  setTimeout(function () {
    tom6();
  }, 3850);
  setTimeout(function () {
    tom1();
  }, 4050);
  setTimeout(function () {
    tom2();
  }, 4250);
  setTimeout(function () {
    tom3();
  }, 4450);
  setTimeout(function () {
    tom5();
  }, 4650);
});

function tom0(){
  var tom0 = new Audio('sounds/tom-0.mp3');
  tom0.play();
}
function tom1(){
  var tom1 = new Audio('sounds/tom-1.mp3');
  tom1.play();
}
function tom2(){
  var tom2 = new Audio('sounds/tom-2.mp3');
  tom2.play();
}
function tom3(){
  var tom3 = new Audio('sounds/tom-3.mp3');
  tom3.play();
}
function tom4(){
  var tom4 = new Audio('sounds/tom-4.mp3');
  tom4.play();
}
function tom5(){
  var tom5 = new Audio('sounds/tom-5.mp3');
  tom5.play();
}
function tom6(){
  var tom6 = new Audio('sounds/tom-6.mp3');
  tom6.play();
}
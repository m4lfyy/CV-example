var images = [
    `url("Shapka_dlya_stranits.png")`, 
    `url("neural_network.jpeg")`,
    `url("photo.jpg")`
    ];
var num = 0;
  
function next() {
    var slider = document.getElementById("header");
    num++;
    if(num >= images.length) {
      num = 0;
    }
    slider.style.backgroundImage = images[num];
    }
  
function prev() {
    var slider = document.getElementById("header");
    num--;
    if(num < 0) {
      num = images.length - 1;
    }
    slider.style.backgroundImage = images[num];
  }

function change() {
  var x = document.getElementById("data");
  x.value = x.value.toUpperCase();
}

function validate() {
  var p1 = document.getElementById("pass1");
  var p2 = document.getElementById("pass2");
  if (p1.value != p2.value) {
    alert("Пароли должны совпадать");
    return false;
  }
  if (p1.value.length < 8) {
    alert("Пароль должен состоять не менее чем из 8 символов");
    return false;
  }
  if (p1.value.search(/\d/) == -1) {
    alert("Пароль должен содержать хотя бы одну цифру");
    return false;
  }
  return true;
}
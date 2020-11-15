Case=0;
function randomColors() {
  function getRandomRGB() { 
    var slotR = (Math.floor(Math.random() * (255 - 0 + 1)) + 0).toString();
    var slotG = (Math.floor(Math.random() * (255 - 0 + 1)) + 0).toString();
    var slotB = (Math.floor(Math.random() * (255 - 0 + 1)) + 0).toString();
    return `RGB(${slotR},${slotG},${slotB})`; 
  }
  document.querySelectorAll(".col-lg-3")[0].style.backgroundColor = getRandomRGB();
  document.querySelectorAll(".col-lg-3")[1].style.backgroundColor = getRandomRGB();
  document.querySelectorAll(".col-lg-3")[2].style.backgroundColor = getRandomRGB();
  document.querySelectorAll(".col-lg-3")[3].style.backgroundColor = getRandomRGB();
  document.querySelectorAll(".col-lg-3")[4].style.backgroundColor = getRandomRGB();
  document.querySelectorAll(".col-lg-3")[5].style.backgroundColor = getRandomRGB();
  
}


randomColors();
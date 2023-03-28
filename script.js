// get the width of the screen
const screenWidth = window.innerWidth;

// check if the screen width is less than 968px
if (screenWidth < 968) {
  // select the element where you want to display the message
  const messageDiv = document.getElementById("error"),
    header = document.getElementById("header"),
    main = document.getElementById("main"),
    footer = document.getElementById("footer");

  messageDiv.classList.add("Appear");
  header.classList.add("Disappear");
  main.classList.add("Disappear");
  footer.classList.add("Disappear");
}


const slider = document.querySelector(".slider");

let isDragging = false,
    startPosition = 0,
    currentTranslate = 0,
    previousTranslate = 0,
    animationID = 0,
    currentIndex = 0;

slider.addEventListener("mousedown", dragStart);
slider.addEventListener("touchstart", dragStart);

slider.addEventListener("mouseup", dragEnd);
slider.addEventListener("touchend", dragEnd);

slider.addEventListener("mousemove", drag);
slider.addEventListener("touchmove", drag);

function dragStart(event) {
  event.preventDefault();
  
  if (event.type === "touchstart") {
    startPosition = event.touches[0].clientX;
  } else {
    startPosition = event.clientX;
    slider.classList.add("grabbing");
  }
  
  isDragging = true;
  animationID = requestAnimationFrame(animation);
}

function drag(event) {
  if (isDragging) {
    let currentPosition;
    
    if (event.type === "touchmove") {
      currentPosition = event.touches[0].clientX;
    } else {
      currentPosition = event.clientX;
    }
    
    currentTranslate = previousTranslate + currentPosition - startPosition;
  }
}

function dragEnd(event) {
  event.preventDefault();
  
  cancelAnimationFrame(animationID);
  isDragging = false;
  slider.classList.remove("grabbing");
  
  if (currentTranslate < 0) {
    currentIndex = (currentIndex + 1) % 10;
  } else if (currentTranslate > 0) {
    currentIndex = (currentIndex - 1 + 10) % 10;
  }
  
  setPositionByIndex();
}

function animation() {
  setSliderPosition();
  
  if (isDragging) {
    requestAnimationFrame(animation);
  }
}

function setSliderPosition() {
  slider.style.transform = `translateX(${currentTranslate}px)`;
}

function setPositionByIndex() {
  currentTranslate = currentIndex * -10;
  previousTranslate = currentTranslate;
  setSliderPosition();
}

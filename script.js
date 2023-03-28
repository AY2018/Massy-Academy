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

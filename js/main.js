const alertClose = document.querySelector(".alert__close");
const alertBox = document.querySelector(".alert");


//Closes alert box when X is clicked
alertClose.addEventListener('click', () => {
  alertBox.style.display = 'none';
})

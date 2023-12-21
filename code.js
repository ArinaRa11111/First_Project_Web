//Регистрация
document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  
  if (username === "" || password === "") {
      if (username === "") {
          document.getElementById("username").classList.add("error-border");
      } else {
          document.getElementById("username").classList.remove("error-border");
      }
      
      if (password === "") {
          document.getElementById("password").classList.add("error-border");
      } else {
          document.getElementById("password").classList.remove("error-border");
      }
      
      alert("Пожалуйста, заполните все поля");
      return;
  }
  
  if (password.length < 8) {
      document.getElementById("password").classList.add("error-border");
      alert("Пожалуйста, введите пароль длиной не менее 8 символов");
      return;
  } else {
      document.getElementById("password").classList.remove("error-border");
  }
  
  alert("Регистрация прошла успешно!");
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
});

//Тема
const themeButton = document.getElementById('themeButton');
const body = document.body;
const text = document.querySelector('p');
let isDarkMode = false;

themeButton.addEventListener('click', () => {
  isDarkMode = !isDarkMode;
  if (isDarkMode) {
    document.getElementById('themeStylesheet').href = 'css/index-dark.css';
  } else {
    document.getElementById('themeStylesheet').href = 'css/index.css';
  }
});

//Прокрутка
function scrollToCoordinates(x, y) {
  window.scrollTo({
    top: y,
    left: x,
    behavior: 'smooth'
  });
}
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('menu_home').addEventListener('click', function(event) {
    scrollToCoordinates(0, 0);
  });
  document.getElementById('menu_aboutus').addEventListener('click', function(event) {
    event.preventDefault();
    scrollToCoordinates(0, 900);
  });
  document.getElementById('menu_prices').addEventListener('click', function(event) {
    event.preventDefault();
    scrollToCoordinates(0, 1620);
  });
  document.getElementById('menu_rules').addEventListener('click', function(event) {
    event.preventDefault();
    scrollToCoordinates(0, 2340);
  });
  document.getElementById('menu_GSN').addEventListener('click', function(event) {
    event.preventDefault();
    scrollToCoordinates(0, 2700);
  });
  document.getElementById('menu_GSN2').addEventListener('click', function(event) {
    event.preventDefault();
    scrollToCoordinates(0, 2700);
  });
  document.getElementById('about_GSN3').addEventListener('click', function(event) {
    event.preventDefault();
    scrollToCoordinates(0, 2700);
  });
  document.getElementById('xboxps_GSN4').addEventListener('click', function(event) {
    event.preventDefault();
    scrollToCoordinates(0, 2700);
  });
});

//DOM
function addOrRemoveElement() {
  var allElements = document.querySelectorAll(".added-element");
  
  if (allElements.length === 0) 
  {
  var newElement = document.createElement("div");
  newElement.textContent = "OwO";
  newElement.classList.add("added-element");
  document.body.appendChild(newElement);
  } 
  else 
  {
  allElements[allElements.length - 1].remove();
  }
}

document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  if(username === "" || password === "") {
    alert('Пожалуйста, заполните все поля');
    return;
  }
  if(password.length < 8) {
    alert('Пароль должен содержать более 8 символов');
    document.getElementById('password').value = "";
    return;
  }

  alert('Регистрация прошла успешно!');
  document.getElementById('username').value = "";
  document.getElementById('password').value = "";
});
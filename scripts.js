function displayLinks() {
  const links = document.querySelector('.links');
  const hamburger = document.querySelector('.hamburger');
  if (window.innerWidth <= 768) {
    links.style.display = 'none';
    hamburger.innerHTML = '☰';
  } else {
    links.style.display = 'flex';
  }
}

window.addEventListener('resize', displayLinks);

function toggleLinks() {
  const links = document.querySelector('.links');
  const hamburger = document.querySelector('.hamburger');
  if (links.style.display === 'flex') {
    links.style.display = 'none';
    hamburger.innerHTML = '☰';
  } else {
    links.style.display = 'flex';
    hamburger.innerHTML = '✕';
  }
}

function submitSignUp() {
  const password = document.getElementById('password');
  const confirmPassword = document.getElementById('confirmPassword');
  if (password.value != confirmPassword.value) {
    document.getElementById('error').play();
    alert("Passwords don't match");
  } else {
    document.getElementById('notification').play();
    alert('Successfully signed up');
  }
}

function soundError() {
  document.getElementById('error').play();
}

function submitLogin() {
  document.getElementById('notification').play();
  alert('Successfully logged in');
}

function logout() {
  document.getElementById('error').play();
  alert('You are already logged out');
}
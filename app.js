const app = document.querySelector('app');

fetch('./app.html')
  .then((res) => res.text())
  .then((res) => (app.innerHTML = res));

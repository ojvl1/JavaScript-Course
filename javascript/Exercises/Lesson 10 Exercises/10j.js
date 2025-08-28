let calculation = localStorage.getItem('calculation') || '';

function updateCalculator(value) {
  calculation += value;

  localStorage.setItem('calculation', calculation);
}

function showCalculation() {
  document.querySelector('.js-show-calculation').innerHTML = calculation;
}
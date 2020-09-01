window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let princpal = document.getElementById('loan-amount');
  princpal.value = 5000;
  let years = document.getElementById('loan-years');
  years.value = 5;
  let rate = document.getElementById('loan-rate');
  rate.value = 4.5;
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let currVal = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currVal));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let years = values.years * 12;
  let rate = values.rate / 100 / 12;
  return((values.amount * rate) / (1 - (1 + rate) ** -years)).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const montlyPayment = document.getElementById("monthly-payment");
  montlyPayment.innerText = "$" + monthly;
}
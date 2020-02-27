// let futureData = fetch("https://api.exchangerate-api.com/v4/latest/USD");

const currencyEl_one = document.getElementById("currency-one");
const amountEl_one = document.getElementById("amount-one");
const currencyEl_two = document.getElementById("currency-two");
const amountEl_two = document.getElementById("amount-two");

const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");

// Fetch exchange rates and update DOM

function calculate(jsonData) {
  currencyOne = currencyEl_one.value;
  currencyTwo = currencyEl_two.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${currencyOne}`)
    .then(data => data.json())
    .then(jsonData => {
      const rate = jsonData.rates[currencyTwo];
      rateEl.innerText = `1 ${currencyOne} =  ${rate} ${currencyTwo}`;
      amountEl_two.value = (rate * amountEl_one.value).toFixed(2);
    });
}

calculate();

function swapCurrencies() {
  const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp;
  calculate();
}

// Event Listeners

currencyEl_one.addEventListener("change", calculate);
amountEl_one.addEventListener("change", calculate);
currencyEl_two.addEventListener("change", calculate);
amountEl_two.addEventListener("change", calculate);
swap.addEventListener("click", swapCurrencies);

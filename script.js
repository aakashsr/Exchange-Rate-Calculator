// let futureData = fetch("https://api.exchangerate-api.com/v4/latest/USD");

const currencyEl_one = document.getElementById("currency-one");
const amountEl_one = document.getElementById("amount-one");
const currencyEl_two = document.getElementById("currency-two");
const amountEl_two = document.getElementById("amount-two");

const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");

// console.log(amountEl_one.value);

// Fetch exchange rates and update DOM

function calculate(jsonData) {
  currencyOne = currencyEl_one.value;
  currencyTwo = currencyEl_two.value;
  //   amountEl_two.value = jsonData.rates[`${currencyTwo}`];

  // fetch(`https://api.exchangerate-api.com/v4/latest/${currencyOne}`)
  //   .then(data => data.json())
  //   .then(
  //     jsonData =>
  //       (amountEl_two.value =
  //         jsonData.rates[`${currencyTwo}`] * amountEl_one.value)
  //   );

  fetch(`https://api.exchangerate-api.com/v4/latest/${currencyOne}`)
    .then(data => data.json())
    .then(jsonData => {
      const rate = jsonData.rates[currencyTwo];
      rateEl.innerText = `1 ${currencyOne} =  ${rate} ${currencyTwo}`;
      amountEl_two.value = (rate * amountEl_one.value).toFixed(2);
    });
}

calculate();

// fetch("https://api.exchangerate-api.com/v4/latest/USD")
//   .then(data => data.json())
//   .then(calculate);

// Event Listeners

currencyEl_one.addEventListener("change", calculate);
amountEl_one.addEventListener("change", calculate);
currencyEl_two.addEventListener("change", calculate);
amountEl_two.addEventListener("change", calculate);

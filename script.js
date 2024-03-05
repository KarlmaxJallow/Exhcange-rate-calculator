const firstCurrencyElement = document.getElementById('first_currency');
const secondCurrencyElement = document.getElementById('second_currency');
const swap = document.getElementById('swap');
const rateElement = document.getElementById('rate');
const firstAmountElement = document.getElementById('first_amount');
const secondAmountElement = document.getElementById('second_amount');

swap.addEventListener('click', getRates);

async function getRates(){

  const url =  `https://v6.exchangerate-api.com/v6/40c8e97c29dcf9ef52ac4772/latest/${firstCurrencyElement.value}`;
  
  try {
     const res = await fetch(url);
     const data = await res.json();
     const conversionRate = data.conversion_rates[secondCurrencyElement.value];
     if (conversionRate) {
       rateElement.textContent = new Intl.NumberFormat('en-GB', {currency:secondCurrencyElement.value,style:'currency'}).format(firstAmountElement.value * conversionRate);

     }
     console.log(conversionRate);
     
  } catch (error) {
    console.error("Error fetching rates:", error);
  }
}


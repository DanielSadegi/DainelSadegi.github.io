document.addEventListener('DOMContentLoaded', function () {
    const fromAmount = document.getElementById('from-currency-amount');
    const toAmount = document.getElementById('to-currency-amount');
    const fromCurrency = document.querySelector('.from-currency select');
    const toCurrency = document.querySelector('.to-currency select');
    const exchangeRateDisplay = document.querySelector('.exchange-rate h1');
    const citySelector = document.querySelector('.cities');
  
    const exchangeRates = {
      'Moscow': {
        'USD': 0.92,
        'EUR': 0.85,
        'AED': 3.67,
        'USDT': 1
      },
      'Sochi': {
        'USD': 0.9,
        'EUR': 1.1,
        'AED': 3.67,
        'USDT': 1
      },
      'Kazan': {
        'USD': 0.89,
        'EUR': 1.09,
        'AED': 2,
        'USDT': 1
      },
      'Yekaterenburn': {
        'USD': 0.9,
        'EUR': 1.1,
        'AED': 3.67,
        'USDT': 1
      },
      'Saint Petersburg': {
        'USD': 1,
        'EUR': 1.1,
        'AED': 3.67,
        'USDT': 5
      },
      'Istanbul': {
        'USD': 0.9,
        'EUR': 1.1,
        'AED': 3.67,
        'USDT': 1
      },
      'Antaliya': {
        'USD': 0.9,
        'EUR': 1.1,
        'AED': 3.67,
        'USDT': 1
      },
      'Alanya': {
        'USD': 0.9,
        'EUR': 1.1,
        'AED': 3.67,
        'USDT': 1
      },
      'Mersin': {
        'USD': 0.9,
        'EUR': 1.1,
        'AED': 3.67,
        'USDT': 1
      },
      'Izmir': {
        'USD': 0.9,
        'EUR': 1.1,
        'AED': 3.67,
        'USDT': 1
      },
      'Ankara': {
        'USD': 0.9,
        'EUR': 1.1,
        'AED': 3.67,
        'USDT': 1
      },
      'Dubai': {
        'USD': 0.9,
        'EUR': 1.1,
        'AED': 3.67,
        'USDT': 1
      }
    };


    toAmount.addEventListener('input', function () {
        const amount = parseFloat(toAmount.value);
        const from = fromCurrency.value;
        const to = toCurrency.value;
        const selectedCity = citySelector.value;
      
        if (!isNaN(amount) && exchangeRates[selectedCity] && exchangeRates[selectedCity][from] && exchangeRates[selectedCity][to]) {
          const convertedAmount = (amount / exchangeRates[selectedCity][to]) * exchangeRates[selectedCity][from];
          fromAmount.value = convertedAmount.toFixed(2);
        }
      });
  
    function convertCurrency() {
      const amount = parseFloat(fromAmount.value);
      const from = fromCurrency.value;
      const to = toCurrency.value;
      const selectedCity = citySelector.value;
  
      if (!isNaN(amount) && exchangeRates[selectedCity] && exchangeRates[selectedCity][from] && exchangeRates[selectedCity][to]) {
        const convertedAmount = (amount * exchangeRates[selectedCity][from]) / exchangeRates[selectedCity][to];
        toAmount.value = convertedAmount.toFixed(2);
      }
    }
  
    fromAmount.addEventListener('input', convertCurrency);
    fromCurrency.addEventListener('change', convertCurrency);
    toCurrency.addEventListener('change', convertCurrency);
    citySelector.addEventListener('change', convertCurrency);
  
    // Initial conversion
    convertCurrency();
  });
  
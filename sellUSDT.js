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
      'RUB': 90,
      'USDT': 1,
      'USDC':1
    },
    'Sochi': {
      'USD': 0.9,
      'EUR': 1.1,
      'AED': 3.67,
      'RUB': 90,
      'USDT': 1,
      'USDC':1
    },
    'Kazan': {
      'USD': 0.89,
      'EUR': 1.09,
      'AED': 2,
      'RUB': 90,
      'USDT': 1,
      'USDC':1
    },
    'Yekaterenburn': {
      'USD': 0.9,
      'EUR': 1.1,
      'AED': 3.67,
      'RUB': 90,
      'USDT': 1,
      'USDC':1
    },
    'Saint Petersburg': {
      'USD': 1,
      'EUR': 1.1,
      'AED': 3.67,
      'RUB': 90,
      'USDT': 5,
      'USDC':1
    },
    'Istanbul': {
      'USD': 0.9,
      'EUR': 1.1,
      'AED': 3.67,
      'USDT': 1,
      'USDC':1
    },
    'Antaliya': {
      'USD': 0.9,
      'EUR': 1.1,
      'AED': 3.67,
      'USDT': 1,
      'USDC':1
    },
    'Alanya': {
      'USD': 0.9,
      'EUR': 1.1,
      'AED': 3.67,
      'USDT': 1,
      'USDC':1
    },
    'Mersin': {
      'USD': 0.9,
      'EUR': 1.1,
      'AED': 3.67,
      'USDT': 1,
      'USDC':1
    },
    'Izmir': {
      'USD': 0.9,
      'EUR': 1.1,
      'AED': 3.67,
      'USDT': 1,
      'USDC':1
    },
    'Ankara': {
      'USD': 0.9,
      'EUR': 1.1,
      'AED': 3.67,
      'USDT': 1,
      'USDC':1
    },
    'Dubai': {
      'AED': 3.67,
      'USDT': 1,
      'USDC':1
    }
  };



  
 // Функция для обновления списка валют в зависимости от выбранного города
 function updateCurrencyOptions() {
  const selectedCity = citySelector.value;
  const currencyOptions = toCurrency.querySelectorAll('option');

  // Очищаем список валют
  while (toCurrency.firstChild) {
    toCurrency.removeChild(toCurrency.firstChild);
  }

  // Добавляем дополнительные опции валют в зависимости от города
  for (const currency in exchangeRates[selectedCity]) {
    if (currency !== 'USDT' && currency !== 'USDC') {
      const option = document.createElement('option');
      option.value = currency;
      option.textContent = currency;
      toCurrency.appendChild(option);
    }
  }
}

citySelector.addEventListener('change', function () {
  updateCurrencyOptions();
  convertCurrency();
});

// Осуществляем первоначальное обновление списка валют
updateCurrencyOptions();

  // Получаем параметры URL
  const urlParams = new URLSearchParams(window.location.search);

  // Получаем значение параметра "city"
  const selectedCity = urlParams.get('city');

  // Получаем ссылку на элемент <select> по его id
  const citySelect = document.getElementById('citySelect');

  // Устанавливаем выбранный город в выпадающем списке
  if (selectedCity) {
    citySelect.value = selectedCity;
    // Обновляем список валют после установки выбранного города
    updateCurrencyOptions();
  }



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
    const convertedAmount = (amount / exchangeRates[selectedCity][from]) * exchangeRates[selectedCity][to];
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

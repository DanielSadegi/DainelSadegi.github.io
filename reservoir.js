// Получаем ссылки на элементы
const currencySelect = document.querySelector('.cash');
const leftText = document.getElementById('left');
const rightText = document.getElementById('right');

// Объект с данными курсов и резервуаров для разных валют
const exchangeRates = {
  USD: {
    exchangeRate: 1.00,
    reservoir: 345981
  },
  EUR: {
    exchangeRate: 0.92,
    reservoir: 294751
  },
  AED: {
    exchangeRate: 3.67,
    reservoir: 572843
  }
};

// Функция для обновления текста и данных
function updateTextAndData() {
  const selectedCurrency = currencySelect.value;
  const { exchangeRate, reservoir } = exchangeRates[selectedCurrency];
  
  leftText.textContent = `1:${exchangeRate.toFixed(2)}`;
  rightText.textContent = `${reservoir} CASH`;
}

// Добавляем слушатель события change к элементу select
currencySelect.addEventListener('change', updateTextAndData);

// Вызываем функцию обновления при загрузке страницы
updateTextAndData();

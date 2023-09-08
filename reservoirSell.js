// Получаем ссылки на элементы
const currencySelect = document.querySelector('.cashForJs'); // Выбор валюты
const leftText = document.getElementById('left'); // Обменный курс
const rightText = document.getElementById('right'); // Резервуар

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
  
  leftText.textContent = `${exchangeRate.toFixed(2)}:1`;
  rightText.textContent = `Reservoir ${reservoir}`;
}

// Добавляем слушатель события change к элементу select
currencySelect.addEventListener('change', updateTextAndData);

// Вызываем функцию обновления при загрузке страницы
updateTextAndData();

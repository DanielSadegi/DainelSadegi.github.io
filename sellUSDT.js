document.addEventListener("DOMContentLoaded", function () {
  const dropList = document.querySelectorAll("form select"),
    fromCurrency = document.getElementById("fromCurrency"),
    toCurrency = document.getElementById("toCurrency"),
    getButton = document.querySelector("form button"),
    exchangeIcon = document.querySelector("form .icon");

  // Словарь для соответствия кодов валют и кодов стран для флагов
  let country_list = {
    "AED": "AE",
    "EUR": "EU",
    "RUB": "RU",
    "USDT": "US",
    "TRY": "TR",
  };

  // Заполняем выпадающие списки валют данными
  for (let i = 0; i < dropList.length; i++) {
      if (i === 0) {
        // В первом списке будет только USDT
        let usdtOptionTag = `<option value="USDT" selected>USDT</option>`;
        dropList[i].insertAdjacentHTML("beforeend", usdtOptionTag);
      } else {
        // Во втором списке будут другие валюты
        for (let currency_code in country_list) {
          let optionTag = `<option value="${currency_code}">${currency_code}</option>`;
          dropList[i].insertAdjacentHTML("beforeend", optionTag);
          loadFlag(dropList[i]);
        }
      }
      dropList[i].addEventListener("change", (e) => {
        loadFlag(e.target);
      });
    }

  /*exchangeIcon.addEventListener("click", () => {
      console.log("Иконка была кликнута"); // Добавьте эту строку для проверки, достигается ли этот код
      [fromCurrency.value, toCurrency.value] = [toCurrency.value, fromCurrency.value];
      loadFlag(fromCurrency);
      loadFlag(toCurrency);
      getExchangeRate();
    });*/

  // Загрузка флагов при выборе валюты
  fromCurrency.addEventListener("change", (e) => {
    loadFlag(e.target);
    getExchangeRate();
  });

  toCurrency.addEventListener("change", (e) => {
    loadFlag(e.target);
    getExchangeRate();
  });

  // Функция для загрузки флага
  function loadFlag(element) {
    for (let code in country_list) {
      if (code === element.value) {
        let imgTag = element.parentElement.querySelector("img");
        if (code === "USDT") {
          // Здесь меняем иконку для валюты "USDT"
          imgTag.src = "USDT.svg";
        } else {
          imgTag.src = `https://flagcdn.com/48x36/${country_list[code].toLowerCase()}.png`;
        }
      }
    }
  }

  // Обработчик клика на кнопку "Get Exchange Rate"
  getButton.addEventListener("click", (e) => {
    e.preventDefault();
    getExchangeRate();
  });

  // Функция для получения курса обмена
  function getExchangeRate() {
    const amount = document.querySelector("form input");
    const exchangeRateTxt = document.querySelector("form .exchange-rate");
    let amountVal = amount.value;

    if (amountVal === "" || amountVal === "0") {
      amount.value = "1";
      amountVal = 1;
    }

    exchangeRateTxt.innerText = "Getting exchange rate...";

    const conversionRates = {
      "EUR": 0.91785869,
      "RUB": 93.617152,
      "AED": 3.6725,
      "TRY": 27.159115,
      "USDT": 1,
    };

    if (fromCurrency.value === "USDT") {
      const convertedAmount = (amountVal * conversionRates[toCurrency.value]).toFixed(8);
      exchangeRateTxt.innerText = `${amountVal} ${fromCurrency.value} = ${convertedAmount} ${toCurrency.value}`;
    } else if (toCurrency.value === "USDT") {
      const convertedAmount = (amountVal / conversionRates[fromCurrency.value]).toFixed(8);
      exchangeRateTxt.innerText = `${amountVal} ${fromCurrency.value} = ${convertedAmount} ${toCurrency.value}`;
    } else {
      exchangeRateTxt.innerText = "Invalid conversion";
    }
  }

  // Загрузка флагов при загрузке страницы
  for (let i = 0; i < dropList.length; i++) {
    loadFlag(dropList[i]);
  }
});

// Обработчик клика на иконку для замены иконки "USDT" на вашу иконку
document.getElementById("usdtIcon").addEventListener("click", () => {
  document.getElementById("usdtIcon").data = "USDT.svg";
});
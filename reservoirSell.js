document.addEventListener('DOMContentLoaded', function () {
  const currencySelect = document.querySelector('.cashForJs');
  const leftText = document.getElementById('left');
  const rightText = document.getElementById('right');
  const citySelect = document.getElementById('citySelect');

  const exchangeRates = {
    'Moscow': {
      'RUB': {
        exchangeRate: 90,
        reservoir: 124124
      },
      'USD': {
        exchangeRate: 0.92,
        reservoir: 345981
      },
      'EUR': {
        exchangeRate: 0.85,
        reservoir: 294751
      },
      'AED': {
        exchangeRate: 3.67,
        reservoir: 572843
      },
      'USDT': {
        exchangeRate: 1,
        reservoir: 123456
      },
      'USDC': {
        exchangeRate: 1,
        reservoir: 789012
      }
    },
    'Dubai': {
      'AED': {
        exchangeRate: 3.67,
        reservoir: 987654
      },
      'USDT': {
        exchangeRate: 1,
        reservoir: 456789
      },
      'USDC': {
        exchangeRate: 1,
        reservoir: 321098
      }
    },
    'Sochi': {
      'USD': {
        exchangeRate: 0.9,
        reservoir: 12345
      },
      'EUR': {
        exchangeRate: 1.1,
        reservoir: 67890
      },
      'AED': {
        exchangeRate: 2.5,
        reservoir: 54321
      },
      'RUB': {
        exchangeRate: 100,
        reservoir: 98765
      },
      'USDT': {
        exchangeRate: 1,
        reservoir: 13579
      },
      'USDC': {
        exchangeRate: 1,
        reservoir: 24680
      }
    },
    'Saint Petersburg': {
      'USD': {
        exchangeRate: 0.9,
        reservoir: 12345
      },
      'EUR': {
        exchangeRate: 1.1,
        reservoir: 67890
      },
      'AED': {
        exchangeRate: 2.5,
        reservoir: 54321
      },
      'RUB': {
        exchangeRate: 100,
        reservoir: 98765
      },
      'USDT': {
        exchangeRate: 1,
        reservoir: 13579
      },
      'USDC': {
        exchangeRate: 1,
        reservoir: 24680
      }
    },
    'Kazan': {
      'USD': {
        exchangeRate: 0.9,
        reservoir: 12345
      },
      'EUR': {
        exchangeRate: 1.1,
        reservoir: 67890
      },
      'AED': {
        exchangeRate: 2.5,
        reservoir: 54321
      },
      'RUB': {
        exchangeRate: 100,
        reservoir: 98765
      },
      'USDT': {
        exchangeRate: 1,
        reservoir: 13579
      },
      'USDC': {
        exchangeRate: 1,
        reservoir: 24680
      }
    },
    'Yekaterenburg': {
      'USD': {
        exchangeRate: 0.9,
        reservoir: 12345
      },
      'EUR': {
        exchangeRate: 1.1,
        reservoir: 67890
      },
      'AED': {
        exchangeRate: 2.5,
        reservoir: 54321
      },
      'RUB': {
        exchangeRate: 100,
        reservoir: 98765
      },
      'USDT': {
        exchangeRate: 1,
        reservoir: 13579
      },
      'USDC': {
        exchangeRate: 1,
        reservoir: 24680
      }
    },
    'Istanbul': {
      'USD': {
        exchangeRate: 0.9,
        reservoir: 12345
      },
      'EUR': {
        exchangeRate: 1.1,
        reservoir: 67890
      },
      'AED': {
        exchangeRate: 2.5,
        reservoir: 54321
      },
      'USDT': {
        exchangeRate: 1,
        reservoir: 13579
      },
      'USDC': {
        exchangeRate: 1,
        reservoir: 24680
      }
    },
    'Antaliya': {
      'USD': {
        exchangeRate: 0.9,
        reservoir: 12345
      },
      'EUR': {
        exchangeRate: 1.1,
        reservoir: 67890
      },
      'AED': {
        exchangeRate: 2.5,
        reservoir: 54321
      },
      'USDT': {
        exchangeRate: 1,
        reservoir: 13579
      },
      'USDC': {
        exchangeRate: 1,
        reservoir: 24680
      }
    },'Ankara': {
      'USD': {
        exchangeRate: 0.9,
        reservoir: 12345
      },
      'EUR': {
        exchangeRate: 1.1,
        reservoir: 67890
      },
      'AED': {
        exchangeRate: 2.5,
        reservoir: 54321
      },
      'USDT': {
        exchangeRate: 1,
        reservoir: 13579
      },
      'USDC': {
        exchangeRate: 1,
        reservoir: 24680
      }
    },
    'Mersin': {
      'USD': {
        exchangeRate: 0.9,
        reservoir: 12345
      },
      'EUR': {
        exchangeRate: 1.1,
        reservoir: 67890
      },
      'AED': {
        exchangeRate: 2.5,
        reservoir: 54321
      },
      'USDT': {
        exchangeRate: 1,
        reservoir: 13579
      },
      'USDC': {
        exchangeRate: 1,
        reservoir: 24680
      }
    },
    'Izmir': {
      'USD': {
        exchangeRate: 0.9,
        reservoir: 12345
      },
      'EUR': {
        exchangeRate: 1.1,
        reservoir: 67890
      },
      'AED': {
        exchangeRate: 2.5,
        reservoir: 54321
      },
      'USDT': {
        exchangeRate: 1,
        reservoir: 13579
      },
      'USDC': {
        exchangeRate: 1,
        reservoir: 24680
      }
    },
    'Alanya': {
      'USD': {
        exchangeRate: 0.9,
        reservoir: 12345
      },
      'EUR': {
        exchangeRate: 1.1,
        reservoir: 67890
      },
      'AED': {
        exchangeRate: 2.5,
        reservoir: 54321
      },
      'USDT': {
        exchangeRate: 1,
        reservoir: 13579
      },
      'USDC': {
        exchangeRate: 1,
        reservoir: 24680
      }
    },
    'Дубай': {
      'AED': {
        exchangeRate: 3.67,
        reservoir: 54321
      },
      'USDT': {
        exchangeRate: 1,
        reservoir: 13579
      },
      'USDC': {
        exchangeRate: 1,
        reservoir: 24680
      }
    },
    'Москва': {
      'USD': {
        exchangeRate: 0.9,
        reservoir: 12345
      },
      'EUR': {
        exchangeRate: 1.1,
        reservoir: 67890
      },
      'AED': {
        exchangeRate: 2.5,
        reservoir: 54321
      },
      'RUB':{
        exchangeRate: 90,
        reservoir: 4444
      },
      'USDT': {
        exchangeRate: 1,
        reservoir: 13579
      },
      'USDC': {
        exchangeRate: 1,
        reservoir: 24680
      }
    },
    'Питер': {
      'USD': {
        exchangeRate: 0.9,
        reservoir: 12345
      },
      'EUR': {
        exchangeRate: 1.1,
        reservoir: 67890
      },
      'AED': {
        exchangeRate: 2.5,
        reservoir: 54321
      },
      'RUB':{
        exchangeRate: 90,
        reservoir: 4444
      },
      'USDT': {
        exchangeRate: 1,
        reservoir: 13579
      },
      'USDC': {
        exchangeRate: 1,
        reservoir: 24680
      }
    },
    'Сочи': {
      'USD': {
        exchangeRate: 0.9,
        reservoir: 12345
      },
      'EUR': {
        exchangeRate: 1.1,
        reservoir: 67890
      },
      'AED': {
        exchangeRate: 2.5,
        reservoir: 54321
      },
      'RUB':{
        exchangeRate: 90,
        reservoir: 4444
      },
      'USDT': {
        exchangeRate: 1,
        reservoir: 13579
      },
      'USDC': {
        exchangeRate: 1,
        reservoir: 24680
      }
    },
    'Казань': {
      'USD': {
        exchangeRate: 0.9,
        reservoir: 12345
      },
      'EUR': {
        exchangeRate: 1.1,
        reservoir: 67890
      },
      'AED': {
        exchangeRate: 2.5,
        reservoir: 54321
      },
      'RUB':{
        exchangeRate: 90,
        reservoir: 4444
      },
      'USDT': {
        exchangeRate: 1,
        reservoir: 13579
      },
      'USDC': {
        exchangeRate: 1,
        reservoir: 24680
      }
    },
    'Екатеренбург': {
      'USD': {
        exchangeRate: 0.9,
        reservoir: 12345
      },
      'EUR': {
        exchangeRate: 1.1,
        reservoir: 67890
      },
      'AED': {
        exchangeRate: 2.5,
        reservoir: 54321
      },
      'RUB':{
        exchangeRate: 90,
        reservoir: 4444
      },
      'USDT': {
        exchangeRate: 1,
        reservoir: 13579
      },
      'USDC': {
        exchangeRate: 1,
        reservoir: 24680
      }
    },
    'Стамбул': {
      'USD': {
        exchangeRate: 0.9,
        reservoir: 12345
      },
      'EUR': {
        exchangeRate: 1.1,
        reservoir: 67890
      },
      'AED': {
        exchangeRate: 2.5,
        reservoir: 54321
      },
      'RUB':{
        exchangeRate: 90,
        reservoir: 4444
      },
      'USDT': {
        exchangeRate: 1,
        reservoir: 13579
      },
      'USDC': {
        exchangeRate: 1,
        reservoir: 24680
      }
    },
    'Анкара': {
      'USD': {
        exchangeRate: 0.9,
        reservoir: 12345
      },
      'EUR': {
        exchangeRate: 1.1,
        reservoir: 67890
      },
      'AED': {
        exchangeRate: 2.5,
        reservoir: 54321
      },
      'RUB':{
        exchangeRate: 90,
        reservoir: 4444
      },
      'USDT': {
        exchangeRate: 1,
        reservoir: 13579
      },
      'USDC': {
        exchangeRate: 1,
        reservoir: 24680
      }
    },'Анталия': {
      'USD': {
        exchangeRate: 0.9,
        reservoir: 12345
      },
      'EUR': {
        exchangeRate: 1.1,
        reservoir: 67890
      },
      'AED': {
        exchangeRate: 2.5,
        reservoir: 54321
      },
      'RUB':{
        exchangeRate: 90,
        reservoir: 4444
      },
      'USDT': {
        exchangeRate: 1,
        reservoir: 13579
      },
      'USDC': {
        exchangeRate: 1,
        reservoir: 24680
      }
    },'Аланья': {
      'USD': {
        exchangeRate: 0.9,
        reservoir: 12345
      },
      'EUR': {
        exchangeRate: 1.1,
        reservoir: 67890
      },
      'AED': {
        exchangeRate: 2.5,
        reservoir: 54321
      },
      'RUB':{
        exchangeRate: 90,
        reservoir: 4444
      },
      'USDT': {
        exchangeRate: 1,
        reservoir: 13579
      },
      'USDC': {
        exchangeRate: 1,
        reservoir: 24680
      }
    },
    'Измир': {
      'USD': {
        exchangeRate: 0.9,
        reservoir: 12345
      },
      'EUR': {
        exchangeRate: 1.1,
        reservoir: 67890
      },
      'AED': {
        exchangeRate: 2.5,
        reservoir: 54321
      },
      'RUB':{
        exchangeRate: 90,
        reservoir: 4444
      },
      'USDT': {
        exchangeRate: 1,
        reservoir: 13579
      },
      'USDC': {
        exchangeRate: 1,
        reservoir: 24680
      }
    },'Мерсин': {
      'USD': {
        exchangeRate: 0.9,
        reservoir: 12345
      },
      'EUR': {
        exchangeRate: 1.1,
        reservoir: 67890
      },
      'AED': {
        exchangeRate: 2.5,
        reservoir: 54321
      },
      'RUB':{
        exchangeRate: 90,
        reservoir: 4444
      },
      'USDT': {
        exchangeRate: 1,
        reservoir: 13579
      },
      'USDC': {
        exchangeRate: 1,
        reservoir: 24680
      }
    },
  };
  

  const initialCurrencies = {
    Dubai: 'AED',
    Moscow: 'RUB',
    Kazan: 'RUB',
    Sochi: 'RUB',
    Dubai: 'AED',
    Moscow: 'RUB',
    Kazan: 'RUB',
    Sochi: 'RUB',
    'Saint Petersburg': 'RUB',
    Yekaterenburg: 'RUB',
    Дубай: 'AED',
    Москва: 'RUB',
    Питер: 'RUB',
    Сочи: 'RUB',
    Казань: 'RUB',
    Екатеренбург: 'RUB',
    // начальные валюты для других городов по необходимости
  };

  function updateTextAndData() {
    const selectedCurrency = currencySelect.value;
    const selectedCountry = citySelect.value;
    const { exchangeRate, reservoir } = exchangeRates[selectedCountry][selectedCurrency];

    leftText.textContent = `1:${exchangeRate.toFixed(2)}`;
    rightText.textContent = `${reservoir} CASH`;
  }

  function updateInitialCurrency() {
    const selectedCountry = citySelect.value;
    const initialCurrency = initialCurrencies[selectedCountry] || 'USD';
    currencySelect.value = initialCurrency;
    updateTextAndData();
  }

  citySelect.addEventListener('change', function () {
    updateInitialCurrency();
    updateTextAndData();
  });

  updateInitialCurrency();

  currencySelect.addEventListener('change', updateTextAndData);
  updateTextAndData();
});

const coinIds = ['BTCUSDT', 'ETHUSDT', 'BNBUSDT', 'DOGEUSDT', 'XRPUSDT', 
                'ADAUSDT', 'SOLUSDT', 'TRXUSDT', 'DOTUSDT', 'USDT', 'AVAXUSDT'];

const coinPrices = {};

async function fetchCoinPrice(coinId) {
    const apiBaseUrl = 'https://api.binance.com/api/v3/ticker/24hr';
    const response = await fetch(`${apiBaseUrl}?symbol=${coinId}`);
    if (response.ok) {
        const data = await response.json();
        coinPrices[coinId] = {
            price: parseFloat(data.lastPrice),
            priceChange: parseFloat(data.priceChange),
            priceChangePercent: parseFloat(data.priceChangePercent)
        };
    } else {
        console.error(`Failed to fetch data for ${coinId}`);
    }
}



async function updateCoinPrice(coinId) {
    await fetchCoinPrice(coinId);
    
    const coinPriceElement = document.getElementById(`${coinId}-price`);
    const coinPriceChangeElement = document.getElementById(`${coinId}-price-change`);
    const coinPriceChangePercentElement = document.getElementById(`${coinId}-price-change-percent`);
    
    if (coinPriceElement && coinPriceChangeElement && coinPriceChangePercentElement) {
        coinPriceElement.textContent = `$${coinPrices[coinId].price}`;
        coinPriceChangeElement.textContent = `$${coinPrices[coinId].priceChange}`;
        coinPriceChangePercentElement.textContent = `${coinPrices[coinId].priceChangePercent}%`;
        
        if (coinPrices[coinId].priceChange > 0) {
            coinPriceChangeElement.classList.add('green-text');
        } else if (coinPrices[coinId].priceChange < 0) {
            coinPriceChangeElement.classList.add('red-text');
        }

        if (coinPrices[coinId].priceChangePercent > 0) {
            coinPriceChangePercentElement.classList.add('green-text');
        } else if (coinPrices[coinId].priceChangePercent < 0) {
            coinPriceChangePercentElement.classList.add('red-text');
        }
    } else {
        console.error(`Element not found for ${coinId}`);
    }
}




// Обновление цен каждые 10 секунд
for (const coinId of coinIds) {
    setInterval(() => updateCoinPrice(coinId), 10000);
    updateCoinPrice(coinId); // Вызов первоначальной загрузки
}

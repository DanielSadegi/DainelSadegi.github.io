document.addEventListener('DOMContentLoaded', function () {
    // Получаем параметры URL
    const urlParams = new URLSearchParams(window.location.search);
    
    // Получаем значение параметра "city"
    const selectedCity = urlParams.get('city');
    
    // Получаем ссылку на элемент <select> по его id
    const citySelect = document.getElementById('citySelect');
    
    // Устанавливаем выбранный город в выпадающем списке
    if (selectedCity) {
      citySelect.value = selectedCity;
    }
  });
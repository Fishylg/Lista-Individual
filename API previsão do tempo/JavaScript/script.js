document.getElementById('getWeather').addEventListener('click', () => {
    const city = document.getElementById('city').value;
    const apiKey = '985cb0888ba2606c7615ec5ecfd02f71'; // Sua chave de API
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=pt&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Cidade não encontrada');
            }
            return response.json();
        })
        .then(data => {
            const weather = `
                <h2>Tempo em ${data.name}</h2>
                <p>Temperatura: ${data.main.temp}°C</p>
                <p>Descrição: ${data.weather[0].description}</p>
                <p>Umidade: ${data.main.humidity}%</p>
            `;
            document.getElementById('weatherResult').innerHTML = weather;
        })
        .catch(error => {
            document.getElementById('weatherResult').innerHTML = `<p>${error.message}</p>`;
        });
});
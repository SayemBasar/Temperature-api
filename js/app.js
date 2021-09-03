const API_KEY = `b66af7af4746ed3b1da841103e1fe92d`;

const searchTemperature = () => {
    const cityName = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;
}
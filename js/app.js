const API_KEY = `b66af7af4746ed3b1da841103e1fe92d`;

const searchTemperature = () => {
    const cityName = document.getElementById('city-input').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data));
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}
const displayTemperature = (data) => {
    setInnerText('city-name', data.name);
    setInnerText('temperature', data.main.temp);
    setInnerText('weather', data.weather[0].main);
    // set weather icon
    const url=`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    const imgIcon=document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
    console.log(data);
}
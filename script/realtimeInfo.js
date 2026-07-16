import { getCityWeatherData, getWeather } from "./weatherAPI.js";

var citySelect = document.querySelector("#city-select");
var weatherBox = document.querySelector("#weather-box");
var cityWeatherData = getCityWeatherData();

function showCityInfo(cityKey) {
    var city = cityWeatherData[cityKey];

    weatherBox.innerHTML =
        "<h4>📍 " + city.name + " 정보</h4>" +
        "<p>위도(Latitude): " + city.latitude + "</p>" +
        "<p>경도(Longitude): " + city.longitude + "</p>";
}

async function showRealtimeWeather(cityKey) {
    var city = cityWeatherData[cityKey];

    weatherBox.innerHTML =
        "<p class='weather-loading'>실시간 날씨 로딩 중... ⏳</p>";

    try {
        var weather = await getWeather(cityKey);

        weatherBox.innerHTML =
            "<h4>🌎 " + weather.cityName + " 실시간 날씨</h4>" +
            "<p>🌡️ 현재 기온: " + weather.temperature + "°C</p>" +
            "<p>💧 현재 습도: " + weather.humidity + "%</p>";
    } catch (error) {
        weatherBox.innerHTML =
            "<h4>🌎 " + city.name + " 실시간 날씨</h4>" +
            "<p>날씨 정보를 불러오지 못했습니다.</p>" +
            "<p>잠시 후 다시 시도해주세요.</p>";
    }
}

citySelect.addEventListener("change", function () {
    showCityInfo(citySelect.value);
    showRealtimeWeather(citySelect.value);
});

showCityInfo(citySelect.value);
showRealtimeWeather(citySelect.value);

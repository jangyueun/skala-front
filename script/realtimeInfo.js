import { getLiveWeather } from "./weatherAPI.js";

var citySelect = document.querySelector("#city-select");
var weatherBox = document.querySelector("#weather-box");

function showCityInfo(cityName, lat, lon) {
    weatherBox.innerHTML =
        "<h4>📍 " + cityName + " 정보</h4>" +
        "<p>위도(Latitude): " + lat + "</p>" +
        "<p>경도(Longitude): " + lon + "</p>";
}

async function showRealtimeWeather(cityName, lat, lon) {
    weatherBox.innerHTML =
        "<p class='weather-loading'>실시간 날씨 로딩 중... ⏳</p>";

    var weatherInfo = await getLiveWeather(lat, lon);

    if (weatherInfo) {
        weatherBox.innerHTML =
            "<h4>🌎 " + cityName + " 실시간 날씨</h4>" +
            "<p>🌡️ 현재 기온: " + weatherInfo.temp + "°C</p>" +
            "<p>💧 현재 습도: " + weatherInfo.humidity + "%</p>";
    } else {
        weatherBox.innerHTML =
            "<h4>🌎 " + cityName + " 실시간 날씨</h4>" +
            "<p>날씨 정보를 불러오지 못했습니다.</p>" +
            "<p>잠시 후 다시 시도해주세요.</p>";
    }
}

citySelect.addEventListener("change", function (event) {
    var selectedValue = event.target.value;

    if (selectedValue === "none") {
        weatherBox.innerHTML = "<p>도시를 선택하세요.</p>";
        return;
    }

    var coords = selectedValue.split(",");
    var lat = coords[0];
    var lon = coords[1];
    var cityName = citySelect.options[citySelect.selectedIndex].text;

    showCityInfo(cityName, lat, lon);
    showRealtimeWeather(cityName, lat, lon);
});

var cityWeatherData = {
    seoul: {
        name: "대한민국 서울 KR",
        latitude: 37.57,
        longitude: 126.98
    },
    tokyo: {
        name: "일본 도쿄 JP",
        latitude: 35.68,
        longitude: 139.76
    },
    paris: {
        name: "프랑스 파리 FR",
        latitude: 48.85,
        longitude: 2.35
    },
    newyork: {
        name: "미국 뉴욕 US",
        latitude: 40.71,
        longitude: -74.01
    }
};

export function getCityWeatherData() {
    return cityWeatherData;
}

export async function getWeather(cityKey) {
    var city = cityWeatherData[cityKey];
    var apiUrl = "https://api.open-meteo.com/v1/forecast?latitude=" + city.latitude +
        "&longitude=" + city.longitude +
        "&current=temperature_2m,relative_humidity_2m";

    var response = await fetch(apiUrl);
    var data = await response.json();

    return {
        cityName: city.name,
        latitude: city.latitude,
        longitude: city.longitude,
        temperature: data.current.temperature_2m,
        humidity: data.current.relative_humidity_2m
    };
}

const API_KEY = "2dd0d5802a3342499c9175751232601";
const searchInput = document.querySelector("#search-input");
const elForm = document.querySelector("#form");
const cityInfos = document.querySelector("#city-infos");

elForm.addEventListener("submit", (e) => {
    e.preventDefault();

    cityInfos.innerHTML = null;

    let LOCATION = searchInput.value;

        fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${LOCATION}&days=7&aqi=yes&alerts=yes`)
                .then(response => response.json())
                .then(data => renderData(data))
                .catch(err => renderError(err))
        
        function renderData(data) {
        cityInfos.innerHTML = `<h2>${data.location.name}</h2>
        <p>${data.location.country} ${data.location.name}</p>
        <ul class="city-weather-data">
            <li class="celsius">${data.current.temp_c}&#186;C</li>
            <li class="weather-condition">${data.current.condition.text}</li>
            <li class="date">${data.location.localtime}</li>
        </ul>`;
        }

        function renderError(err) {
            console.log(err);
            cityInfos.innerHTML = `<h1 class="not-found-heading">Not Found :'(</h1>`

        }
    e.target[0].reset();

})

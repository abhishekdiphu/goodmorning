function city(data) {
    if(data.cod === 404) {
        // error
        console.log("city not found");
        return;
    }

    let item = document.createElement("li");
    item.classList.add("item");

    let cityName = data.city.name;
    let country = data.city.country;
    let forecast = data.list;
    let todaysForecast = forecast[0];
    let todaysDate = (new Date(todaysForecast.dt * 1000)).toDateString();
    let unit = "&#176; " + document.querySelector("#f").checked ? "F" : "C";
    let todaysSummary = todaysForecast.weather[0].description;
    todaysSummary = todaysSummary.charAt(0).toUpperCase() + todaysSummary.substring(1);

    item.innerHTML = 
      "<div class=\"item__container\">" +
        "<div class=\"item__info\">" +
          "<h2 class=\"item__location\">" + cityName + ", " + country + "</h2>" +
          "<h4 class=\"item__date\">" + todaysDate + "</h4>" +
          "<p class=\"item__summary\">" + todaysSummary + "</p>" +
          "<div class=\"item__temp\">" +
            "<p>Avg: " + todaysForecast.temp.day + unit + "</p>" +
            "<p>Low: " + todaysForecast.temp.min + unit + "</p>" +
            "<p>High: " + todaysForecast.temp.max + unit + "</p>" +
          "</div>" +
        "</div>" +
        "<div class=\"toggle-box\">" +
          "<i class=\"fas fa-caret-down toggle\"></i>" +
        "</div>" +
      "</div>" + 
      "<hr>" +
      "<div class=\"forecast__container\">" +
        "<div class=\"row\">" +
        "</div>" +
      "</div>";

    // toggle button
    let forecastContainer = item.querySelector(".forecast__container");
    item.querySelector(".toggle").addEventListener("click", function() {
        forecastContainer.classList.toggle("forecast__show");
        this.classList.toggle("fa-caret-up");
    });

    // populate 5 day forecast
    let row = item.querySelector(".row");
    forecast.forEach(function(thatDay) {
        let day = document.createElement("div");
        day.className = "col col-md-1-5";

        let forecastDate = (new Date(thatDay.dt * 1000)).toDateString();
        let forecastDesc = thatDay.weather[0].description;
        forecastDesc = forecastDesc.charAt(0).toUpperCase() + forecastDesc.substring(1);

        let forecastAvg = thatDay.temp.day + unit;
        let forecastLow = thatDay.temp.min + unit;
        let forecastHigh = thatDay.temp.max + unit;

        day.innerHTML = 
          "<div class=\"forecast__info\">" +
            "<h4 class=\"forecast__date\">" + forecastDate + "</h4>" +
            "<p class=\"forecast__summary\">" + forecastDesc + "</p>" +
            "<div class=\"forecast__temp\">" +
              "<p>Avg: " + forecastAvg + "</p>" +
              "<p>Low: " + forecastLow + "</p>" +
              "<p>High: " + forecastHigh + "</p>" +
            "</div>" +
          "</div>";
        
        row.appendChild(day);
    });

    return item;
}

export default city;


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

    item.innerHTML = 
      "<div class=\"item__container\">" +
        "<div class=\"item__info\">" +
          "<h2 class=\"item__location\">" + cityName + ", " + country + "</h2>" +
          "<h4 class=\"item__date\">" + todaysDate + "</h4>" +
          "<div class=\"item__temp\">" +
            "<p class=\"item__temp--summary\">" + todaysForecast.weather[0].description + "</p>" +
            "<p class=\"item__temp--avg\">" + todaysForecast.temp.day + unit + "</p>" +
            "<p class=\"item__temp--low\">" + todaysForecast.temp.min + unit + "</p>" +
            "<p class=\"item__temp--high\">" + todaysForecast.temp.max + unit + "</p>" +
          "</div>" +
        "</div>" +
        "<div class=\"toggle-box\">" +
          "<i class=\"fas fa-caret-down toggle\"></i>" +
        "</div>" +
      "</div>" + 
      "<div class=\"forecast__container\">" +
        "<div class=\"row\">" +
        "</div>" +
      "</div>";

    let forecastContainer = item.querySelector(".forecast__container");
    item.querySelector(".toggle").addEventListener("click", function() {
        forecastContainer.classList.toggle("forecast__show");
        this.classList.toggle("fa-caret-up");
    });

    let row = item.querySelector(".row");
    forecast.forEach(function(thatDay) {
        let day = document.createElement("div");
        day.className = "col col-md-1-5";

        let forecastDate = (new Date(thatDay.dt * 1000)).toDateString();
        let forecastDesc = thatDay.weather[0].description;
        let forecastAvg = thatDay.temp.day + unit;
        let forecastLow = thatDay.temp.min + unit;
        let forecastHigh = thatDay.temp.max + unit;

        day.innerHTML = 
          "<div class=\"forecast__info\">" +
            "<h4 class=\"forecast__date\">" + forecastDate + "</h4>" +
            "<p class=\"forecast__summary\">" + forecastDesc + "</p>" +
            "<p class=\"forecast__avg\">" + forecastAvg + "</p>" +
            "<p class=\"forecast__low\">" + forecastLow + "</p>" +
            "<p class=\"forecast__high\">" + forecastHigh + "</p>" +
          "</div>";
        
        row.appendChild(day);
    });

    return item;
}

export default city;


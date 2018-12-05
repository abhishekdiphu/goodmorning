"use strict";

import { addCity } from "./citylist.js";
import { showPopup } from "../components/popup.js";

async function getWeather(url, cb) {
  try {
    let response = await fetch(url, {mode: 'cors'});
    let result = await response.json();
    
    cb(result);
  } catch(e) {
    // display popup saying there was an error
    showPopup(document.querySelector(".popup"));
  }
}

function initSidebar() {
  let sidebar = document.createElement("div");
  sidebar.classList.add("sidebar");

  sidebar.innerHTML = 
    "<h1 class=\"header\">Morning Sunshine</h1>" +
	  "<form>" + 
      "<input type=\"text\" class=\"search\" placeholder=\"Los Angeles, US\" pattern=\"[a-zA-Z -]+[,] {0,1}[a-zA-Z]{2}\">" +
      "<input id=\"f\" type=\"radio\" class=\"radio\" name=\"units\" checked><label for=\"f\">Fahrenheit</label>" +
      "<input id=\"c\" type=\"radio\" class=\"radio\" name=\"units\"><label for=\"c\">Celcius</label>" +
	  "</form>";

  let input = sidebar.querySelector("input");
  sidebar.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    
    let units = sidebar.querySelector("#f").checked ? "imperial" : "metric";

    let location = input.value.replace(/ /g, '%20');
    let searchQuery = "https://api.openweathermap.org/data/2.5/forecast/daily?q=" + location + "&units=" + units + "&cnt=5&APPID=f3ef326d9ead2dc969238af1a6f1d733";

  	getWeather(searchQuery, addCity);
  });

  return sidebar;
}

export default initSidebar;
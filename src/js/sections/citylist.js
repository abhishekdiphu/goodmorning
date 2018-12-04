import city from '../components/city.js';

function addCity(data) {
    document.querySelector(".list").appendChild(city(data));
}

function initList() {
    let list = document.createElement("ul");
    list.classList.add("list");
    return list;
}

export { 
    initList,
    addCity
}
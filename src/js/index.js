import initSidebar from "./sections/sidebar.js";
import { initList } from "./sections/citylist.js";
import { createPopup } from "./components/popup";

(function() {
	let app = document.querySelector(".content");
	let sidebar = initSidebar();
	let list = initList();
	let popup = createPopup("City was not found. Make sure to type in the correct city name and country initial separated by a comma. e.g. \"Los Angeles, US\"");

	document.body.appendChild(popup);
	app.appendChild(sidebar);
	app.appendChild(list);
})();
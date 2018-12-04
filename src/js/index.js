import initSidebar from "./sections/sidebar.js";
import { initList } from "./sections/citylist.js";

(function() {
	let app = document.querySelector(".content");
	let sidebar = initSidebar();
	let list = initList();

	app.appendChild(sidebar);
	app.appendChild(list);
})();
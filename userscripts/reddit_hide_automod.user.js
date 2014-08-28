// ==UserScript==
// @name				reddit multireddit and modqueue colorifier
// @namespace		reddit_listen2
// @description	Opens each image in a topic in a new tab
// @include			*.reddit.com/message/moderator*
// ==/UserScript==

(function(){
	"use strict";

	var c, d;

	function hide() {
		var subjs = document.getElementsByClassName("subject");

		for (var s = 0; s < subjs.length; s++) {
			if (subjs[s].childNodes[1] !== undefined && subjs[s].childNodes[1].textContent === "AutoModerator notification") {
				//subjs[s].parentNode.style.display = "none";
				if (c.checked) {
					subjs[s].parentNode.style.setProperty("height", "1.5em", "important");
					subjs[s].parentNode.style.setProperty("overflow", "hidden", "important");
				} else {
					subjs[s].parentNode.style.setProperty("height", "inherit");
					subjs[s].parentNode.style.setProperty("overflow", "inherit");
				}
			}
		}
	}

	c = document.createElement("input");
	c.type = "checkbox";
	c.addEventListener("change", hide);
	c.checked = true;
	document.getElementsByClassName("menuarea")[0].appendChild(c);

	d = document.createElement("label");
	d.htmlFor = c.id;
	d.innerText = "collapse automod";
	document.getElementsByClassName("menuarea")[0].appendChild(d);


	hide();

	window.addEventListener("neverEndingLoad", function() {
		hide();
	}, false);
}());

// ==UserScript==
// @name				reddit multireddit and modqueue colorifier
// @namespace		reddit_listen2
// @description	Opens each image in a topic in a new tab
// @include			*.reddit.com/message/moderator*
// ==/UserScript==

(function(){
	"use strict";

	function hide() {
		var subjs = document.getElementsByClassName("subject");

		for (var s = 0; s < subjs.length; s++) {
			if (subjs[s].childNodes[1] !== undefined && subjs[s].childNodes[1].textContent === "AutoModerator notification") {
				//subjs[s].parentNode.style.display = "none";
				subjs[s].parentNode.style.setProperty("height", "1.5em", "important");
				subjs[s].parentNode.style.setProperty("overflow", "hidden", "important");
			}
		}
	}

	hide();

	window.addEventListener("neverEndingLoad", function() {
		hide();
	}, false);
}());

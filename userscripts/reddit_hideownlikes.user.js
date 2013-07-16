// ==UserScript==
// @name				own submission hider
// @namespace		reddit_listen2
// @description	Hides your own submissions /user/$name/liked
// @include			*.reddit.com/user/*/liked*
// ==/UserScript==

(function(){
	"use strict";

	var c, d;

	function filter() {
		var items, i;
		items = document.getElementsByClassName("author");
		for (i = 0; i < items.length; i++) {
			if (items[i].innerText === reddit.logged) {
				if (c.checked)	{ items[i].parentNode.parentNode.parentNode.style.display = "none"; }
				else				{ items[i].parentNode.parentNode.parentNode.style.display = "block"; }
			}
		}
	}

	c = document.createElement("input");
	c.type = "checkbox";
	c.id = "hide_own_likes";
	c.addEventListener("change", filter);
	document.getElementsByClassName("tabmenu")[0].appendChild(c);

	d = document.createElement("label");
	d.htmlFor = c.id;
	d.innerText = "hide my submissions";
	document.getElementsByClassName("tabmenu")[0].appendChild(d);

	filter();

	window.addEventListener("neverEndingLoad", function() {
		filter();
	}, false);
}());

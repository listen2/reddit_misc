// ==UserScript==
// @name				reddit de-imager
// @namespace		reddit_listen2
// @description	Adds a checkbox to control hiding of images in listings
// @include			*.reddit.com/*
// ==/UserScript==

(function(){
	"use strict";
	if (document.body.className.indexOf("listing-page") === -1) {
		return;
	}

	var table, c, d;
	var image_regexp = /(:?imgur|jpg$|jpeg$|png$|gif$)/;

	function find_child_a_with_class(e, name) {
		var len = e.children.length;
		var i, x;
		if (len === 0) {
			if (e.tagName === "A" && e.className.indexOf(name) !== -1) {
				return e;
			}
			return null;
		}
		for (i = 0; i < len; i++) {
			x = find_child_a_with_class(e.children[i], name);
			if (x) {
				return x;
			}
		}
		return null;
	}

	function apply() {
		var elems = document.getElementsByClassName("link");
		var link, i;
		for (i = 0; i < elems.length; i++) {
			link = find_child_a_with_class(elems[i], "title");
			if (link.href.toLowerCase().match(image_regexp)) {
				if (c.checked)	{ elems[i].style.setProperty("display", "none"); }
				else				{ elems[i].style.setProperty("display", "block"); }
			}
		}
	}

	table = document.getElementById("siteTable");

	c = document.createElement("input");
	c.type = "checkbox";
	c.id = "hide_images";
	c.addEventListener("change", apply);

	d = document.createElement("label");
	d.htmlFor = c.id;
	d.innerText = "hide images";

	table.insertBefore(d, table.firstChild);
	table.insertBefore(c, table.firstChild);


	window.addEventListener("neverEndingLoad", function() {    	
		apply();
	}, false);
}());

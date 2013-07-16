// ==UserScript==
// @name				reddit permalink contextualizer
// @namespace		reddit_listen2
// @description	Adds a ?context=3 link after every permalink to a comment
// @include			*.reddit.com/*
// ==/UserScript==

(function(){
	"use strict";

	function contextualize() {
		var elems = document.getElementsByClassName("bylink");
		var i, e, d;
		for (i = 0; i < elems.length; i++) {
			if (elems[i].innerText !== "permalink") {			//CONFIGURE HERE: if your language uses a different word for 'permalink', change this line
				continue;
			}

			e = document.createElement("a");
			e.innerHTML = "context";
			e.href = elems[i].href + "?context=3";				//CONFIGURE HERE: how much context do you want? change the number.

			d = document.createElement("li");
			d.appendChild(e);

			elems[i].parentNode.parentNode.insertBefore(d, elems[i].parentNode.nextSibling);
		}
	}

	contextualize();
}());

// ==UserScript==
// @name				reddit multireddit and modqueue colorifier
// @namespace		reddit_listen2
// @description	Opens each image in a topic in a new tab
// @include			*.reddit.com/r/mod/about/modqueue
// @include			*.reddit.com/r/mod/new*
// @include			*.reddit.com/new*
// @include			*.reddit.com/rising*
// @include			*.reddit.com/
// @include			*.reddit.com/message/moderator*
// @include			*.reddit.com/*/m/*
// ==/UserScript==

(function(){
	"use strict";

	function colorize() {
		var s, e, subrs, reddits;

		subrs = document.getElementsByClassName("subreddit");		//for new and modqueue
		reddits = document.getElementsByClassName("reddit");		//for modmail

		if (window.location.href.indexOf("modqueue") > -1) {
			for (s = 0; s < subrs.length; s++) {
				e = subrs[s].parentNode.parentNode;
				var x = subrs[s].innerText;
				if (x[0] === '/') {
					x = x.substr(3);
				}
				e.style.setProperty("background-color", rcolors[x], "important");
			}
		} else if (window.location.href.indexOf("message/moderator") > -1) {
			for (s = 0; s < reddits.length; s++) {
				e = reddits[s].firstChild;
				e.parentNode.parentNode.parentNode.style.setProperty("background-color", rcolors[e.innerText.substring(3)], "important");
			}
		} else {
			for (s = 0; s < subrs.length; s++) {
				e = subrs[s].parentNode.parentNode.parentNode;
				e.style.setProperty("background-color", rcolors[subrs[s].innerText.substr(3)], "important");
			}
		}
	}

	colorize();

	window.addEventListener("neverEndingLoad", function() {
		colorize();
	}, false);
}());

// ==UserScript==
// @name reddit multireddit and modqueue colorifier
// @namespace reddit_listen2
// @description rewrites the $subreddit link in the upper-left to always lead to $subreddit/new
// @include *.reddit.com/r/*
// @include *.reddit.com/user/*
// @include *.reddit.com/new
// @include *.reddit.com/
// ==/UserScript==

(function(){
	"use strict";

	function newize(elems, parens, fn) {
		var g;
		for (i = 0; i < elems.length; i++) {
			d = document.createElement("span");
			d.style.setProperty("font-size", "small");
			d.style.setProperty("display", "inline");

			if (elems[i].tagName === "SPAN") {
				g = elems[i].firstChild;
			} else {
				g = elems[i];
			}

			e = document.createElement("a");
			e.innerHTML = "hot";
			e.href = g.href;

			if (parens) {
				d.appendChild(document.createTextNode(" ("));
				d.appendChild(e);
				d.appendChild(document.createTextNode(")"));
			} else {
				d.appendChild(e);
			}
			//g.parentNode.insertBefore(d, g.nextSibling);
			fn(elems, d);

			g.href += "/new";
			g.href = g.href.replace("//new", "/new");
		}
	}

	var elems = document.getElementsByClassName("redditname pagename");
	var i, d, e;
	newize(elems, true, function(e, d) { e[0].insertBefore(d, e[0].firstChild.nextSibling) });

	elems = document.getElementsByClassName("subreddit");
	newize(elems, true, function(e, d) { e[i].parentNode.insertBefore(d, e[i].nextSibling) });

	elems = document.querySelectorAll(".listing-chooser a")
	newize(elems, false, function(e, d) { e[i].parentNode.insertBefore(d, e[i].nextSibling) });

	//TODO handler
}());

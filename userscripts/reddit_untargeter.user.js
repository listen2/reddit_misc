// ==UserScript==
// @name reddit untargeter
// @namespace reddit_listen2
// @description Opens reddit links in the same tab
// @include *.reddit.com/*
// ==/UserScript==

(function(){
	"use strict";

	function untarget() {
		var elems = document.getElementsByTagName("a");
		var i;
		for (i = 0; i < elems.length; i++) {
			elems[i].className = elems[i].className.replace("may-blank" , "");
		}

		elems = document.getElementsByTagName("div");
		for (i = 0; i < elems.length; i++) {
			elems[i].className = elems[i].className.replace("may-blank-within" , "");
		}
	}

	untarget();

	window.addEventListener("neverEndingLoad", function() {
		untarget();
	}, false);
}());


// ==UserScript==
// @name reddit untargeter
// @namespace reddit_listen2
// @description Opens reddit links in the same tab
// @include *.reddit.com/*
// ==/UserScript==

(function(){
	"use strict";

	function untarget() {
		var elems = document.querySelectorAll(".may-blank, .may-blank-within");
		var i;
		for (i = elems.length - 1; i >= 0; i--) {
			elems[i].classList.remove("may-blank");
			elems[i].classList.remove("may-blank-within");
		}
	}

	untarget();

	window.addEventListener("neverEndingLoad", function() {
		untarget();
	}, false);
}());


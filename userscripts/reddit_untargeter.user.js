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
			if (elems[i].className.indexOf("blank") > -1) {
				elems[i].className = elems[i].className.replace(/may-blank(:?-within)?/g , "");
			}
		}
	}

	untarget();

	window.addEventListener("neverEndingLoad", function() {
		untarget();
	}, false);
}());


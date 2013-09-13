// ==UserScript==
// @name reddit	username printifier
// @namespace		reddit_listen2
// @description	adds an OpenSSH-style visual fingerprint before usernames, courtesy of andre-d's visiprint.js
// @include			*.reddit.com/*
// ==/UserScript==

(function(){
	"use strict";

	function printify(text, canvas) {
		var fingerprint;
		fingerprint = visiprint.fingerprint_randomart(text);
		visiprint.canvas_fingerprint(canvas, fingerprint, visiprint.sample_colors, 1);
	}

	function applicate() {
		var i, n, users;
		users = document.getElementsByClassName("author");			//for usernames
		for (i = 0; i < users.length; i++) {
			if (users[i].previousSibling !== null && users[i].previousSibling.tagName === "CANVAS") {
				continue;
			}
			n = document.createElement("canvas");
			users[i].parentNode.insertBefore(n, users[i]);
			printify(users[i].innerText, n);
		}
	}

	applicate();

	window.addEventListener("neverEndingLoad", function() {
		applicate();
	}, false);
}());

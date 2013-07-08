// ==UserScript==
// @name reddit username colorifier
// @namespace reddit_listen2
// @description exactly what you think
// @include *.reddit.com/*
// ==/UserScript==

(function(){
	window.addEventListener("neverEndingLoad", function() {    	
		colorize();
	}, false);

	function get_color(name) {
		var a = [0, 0, 0];
		for (i = 0; i < name.length; i++) {
			x = name.charCodeAt(i)-48;
			a[x%3] = a[x%3]+x;
		}
		for (i = 0; i < a.length; i++) {
			a[i] = Math.floor(0.8*(a[i]%256));
		}
		return "rgb(" + a[0] + "," + a[1] + "," + a[2] + ")";
	}

	function colorize() {
		users = document.getElementsByClassName("author");			//for usernames
		for (f = 0; f < users.length; f++) {
			u = users[f];
			//u.style.backgroundColor = get_color(u.innerText);
			u.style.setProperty("color", get_color(u.innerText), "important");
			u.style.setProperty("font-size", "14px", "important");
			u.style.setProperty("visibility", "visible", "important");
			u.style.setProperty("display", "inline", "important");

			u.style.setProperty("border-radius", "3px", "important");
			u.style.setProperty("padding", "0 2px 0 2px", "important");
			//u.style.color = "#000";
		}
	}

	colorize();
})();

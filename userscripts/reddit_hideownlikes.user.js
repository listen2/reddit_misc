// ==UserScript==
// @name				own submission hider
// @namespace		reddit_listen2
// @description	Hides your own submissions /user/$name/liked
// @include			*.reddit.com/user/*/liked*
// ==/UserScript==

(function(){
	username = document.getElementsByClassName("pagename")[0].innerText;

	window.addEventListener("neverEndingLoad", function() {    	
		filter();
	}, false);

	function filter() {
		items = document.getElementsByClassName("author");
		for (i = 0; i < items.length; i ++) {
			if (items[i].innerText === username) {
				if (c.checked)
					items[i].parentNode.parentNode.parentNode.style.display = "none";
				else
					items[i].parentNode.parentNode.parentNode.style.display = "block";
			}
		}
	}

	var c = document.createElement("input");
	c.type = "checkbox";
	c.id = "hide_own_likes";
	c.addEventListener("change", filter);
	document.getElementsByClassName("tabmenu")[0].appendChild(c);

	var d = document.createElement("label");
	d.htmlFor = c.id;
	d.innerText = "hide my submissions";
	document.getElementsByClassName("tabmenu")[0].appendChild(d);

	filter();
})();

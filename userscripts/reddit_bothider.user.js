// ==UserScript==
// @name				bot hider
// @namespace		reddit_listen2
// @description	Hides bots' entries in the modlog
// @include			*.reddit.com/r/*/about/log*
// ==/UserScript==

(function(){
	window.addEventListener("neverEndingLoad", function() {    	
		filter();
	}, false);

	bots = ["GharbadTheWeak", "WoWCaretaker"]		//CONFIGURE HERE

	function filter() {
		items = document.getElementsByClassName("modactions");
		for (i = 0; i < items.length; i += 2) {	//"modactions" is given to <tr>s and nested <a>s. Skip the <a>s.
			if (items[i].children.length == 4)		//a single reddit's modlog has four columns
				usercol = items[i].children[1].children[0];
			else if (items[i].children.length == 5)		// /r/mod/about/log has a fifth column, for the name of the subreddit
				usercol = items[i].children[2].children[0];
			if (bots.indexOf(usercol.innerText) !== -1) {
				if (c.checked)
					items[i].style.display = "none";
				else
					items[i].style.display = "table-row";
			}
		}
	}

	var c = document.createElement("input");
	c.type = "checkbox";
	c.id = "hide_gharbad";
	c.addEventListener("change", filter);
	document.getElementsByClassName("menuarea")[0].appendChild(c);

	var d = document.createElement("label");
	d.htmlFor = c.id;
	d.innerText = "hide (" + bots.join(", ") + ")";
	document.getElementsByClassName("menuarea")[0].appendChild(d);

	filter();
})();

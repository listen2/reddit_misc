// ==UserScript==
// @name reddit multireddit and modqueue colorifier
// @namespace reddit_listen2
// @description rewrites the $subreddit link in the upper-left to always lead to $subreddit/new
// @include *.reddit.com/r/*
// @include *.reddit.com/user/*
// @include *.reddit.com/new/
// ==/UserScript==

(function(){
	var elems = document.getElementsByClassName("redditname pagename");
	if (elems.length > 0) {
		d = document.createElement("span");

		e = document.createElement("a");
		e.innerHTML = "hot";
		e.href = elems[0].firstChild.href

		d.appendChild(document.createTextNode(" ("));
		d.appendChild(e);
		d.appendChild(document.createTextNode(")"));
		elems[0].insertBefore(d, elems[0].firstChild.nextSibling);

		elems[0].firstChild.href += "new";
	}

	var elems = document.getElementsByClassName("subreddit");
	for (i = 0; i < elems.length; i++) {
		d = document.createElement("span");

		e = document.createElement("a");
		e.innerHTML = "hot";
		e.href = elems[i].href

		d.appendChild(document.createTextNode(" ("));
		d.appendChild(e);
		d.appendChild(document.createTextNode(")"));
		elems[i].parentNode.insertBefore(d, elems[i].nextSibling);

		elems[i].href += "new";
	}
})();


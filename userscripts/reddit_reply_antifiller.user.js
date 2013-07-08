// ==UserScript==
// @name reddit reply anti-filler
// @namespace reddit_listen2
// @description Prevents comment replies from being auto-filled with the selected text
// @include *.reddit.com/*
// ==/UserScript==

(function(){
	var script = document.createElement("script"); 
	script.type = "text/javascript"; 
	script.innerHTML = 'reply = function(a) {						\
			var b = comment_reply_for_elem(a),						\
				c = b.find("textarea"); 								\
			show_edit_usertext(b);										\
			b.show();														\
			b.find(".cancel").get(0).onclick = function() {		\
				b.hide()														\
			};																	\
			$(a).thing().find(".showreplies:visible").click();	\
			return !1														\
		}';
	document.getElementsByTagName("head")[0].appendChild(script);
})();

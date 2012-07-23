# Overview

This repo contains an assortment of useful scripts and code snippets for use with reddit. Many of them were written for very specific purposes and are unlikely to be reusable, but are published here in the hope that someone will find them valuable.

# quotegen.pl

This small perl script takes a text file of strings (delimited by \n) and outputs CSS classes suitable for use with a random-quote element in a subreddit's stylesheet. The quote element looks something like this:

```css
input[name="uh"] ~ a:after, .user:before {
	position: absolute;
	top: 14px;
	right: 400px;
	display: block;
}
```

and a sample of the output classes looks like this:

```css
input[name="uh"][value^="5"] ~ a:after { content: "quote 1" }
input[name="uh"][value^="4"] ~ a:after { content: "quote 2" }
input[name="uh"][value^="3"] ~ a:after { content: "quote 3" }
```

The classes select beginning of the `uh` attribute of the `logout` field (which is a pseudorandom string) to choose which style to apply. I got the idea from xiphirx of /r/diablo, but I have heard that this trick was originally devised by deadb33f. You can see a working example on /r/diablo, /r/buffy, or /r/angel (as of July 2012).

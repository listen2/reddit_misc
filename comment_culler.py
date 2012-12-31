#!/usr/bin/python3

import praw
import json
import random
import time

subr = "Diablo"

r = praw.Reddit(user_agent="/r/diablo contest tool, comment picker")

prizes = []
prizes = prizes + ["COLLECTOR'S EDITION" for x in range(0, 3)]
prizes = prizes + ["MINI-TYRAEL" for x in range(0, 5)]
prizes = prizes + ["PIN" for x in range(0, 2)]
prizes = prizes + ["LANYARD" for x in range(0, 10)]
random.shuffle(prizes)
prize = prizes[0]

coms = []

#get 12 hours' worth of comments
n = ""
while True:
	j = r._request(page_url="http://www.reddit.com/r/" + subr + "/comments.json", url_data={"limit":100,"after":n})
	data = json.loads(j.decode("UTF-8"))
	n = data["data"]["after"]

	coms = coms + data["data"]["children"]
	if coms[-1]["data"]["created_utc"] < time.time() - 41400:	#last 12 hours, with the UTC difference
		break

#trim comments in excess of one per user
n = 0
skip = []
cooked = []
for c in coms:
	if n in skip:
		n += 1
		continue
	dups = []
	m = 0
	for d in coms[n+1:]:
		if c["data"]["author"] == d["data"]["author"]:
			dups.append(n+m+1)
		m += 1
	if len(dups) > 0:
		dups.append(n)
		#print("%s at %d also made" % (c["data"]["author"], n))
		#for f in dups:
			#print("	%d %s" % (f, coms[f]["data"]["author"]))
		cooked.append(random.choice([coms[x] for x in dups]))
		skip = skip + dups
	else:
		cooked.append(c)
	n += 1

#now just pick one. Actually, pick four, in case the first few are off-topic or unconstructive comments
print("drawing for %s..." % (prize))
print("DID YOU REMEMBER TO UPDATE THE LIST OF AVAILABLE PRIZES????\n\n\n\n\n\n")
for f in range(0, 4):
	c = coms[random.randint(0, 100)]["data"]
	print("http://www.reddit.com/comments/%s/_/%s" % (c["link_id"][3:], c["id"]))
	print("by %s" % (c["author"]))
	if len(c["body"]) > 300:
		print("%s..." % (c["body"][:300]))
	else:
		print(c["body"])
	print("\n")
print("WELL, DID YOU REMEMBER TO UPDATE THE LIST OF AVAILABLE PRIZES????")

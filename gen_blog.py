import json, os, random, sys, urllib.request, datetime
KEY = os.environ.get("GEMINI_API_KEY")
MODEL = os.environ.get("GEMINI_MODEL", "gemini-2.5-flash")
TOPICS = ["skincare routines", "makeup tips", "elegant jewelry styling", "kitchen design and cookware",
          "personal care rituals", "starting a small online business", "digital presence for entrepreneurs",
          "gift ideas for women", "home fragrance and ambiance"]
posts = json.load(open("posts.json", encoding="utf-8"))
titles = [p["en"]["t"] for p in posts[:12]]
prompt = f"""Write ONE new elegant blog post for a luxury women's beauty, kitchen and jewelry platform.
Topic: {random.choice(TOPICS)}. Do not repeat these titles: {titles}.
Rules: general lifestyle advice only, no medical claims, no diagnoses, no guaranteed results.
Return ONLY JSON: {{"ar":{{"t":"title","d":"3-4 sentences"}},"fr":{{"t":"","d":""}},"en":{{"t":"","d":""}}}}
ar = Modern Standard Arabic, fr = French, en = English; same content in all three."""
body = json.dumps({"contents": [{"parts": [{"text": prompt}]}],
                   "generationConfig": {"responseMimeType": "application/json"}}).encode()
req = urllib.request.Request(
    f"https://generativelanguage.googleapis.com/v1beta/models/{MODEL}:generateContent",
    body, {"Content-Type": "application/json", "x-goog-api-key": KEY})
try:
    out = json.load(urllib.request.urlopen(req, timeout=60))
    new = json.loads(out["candidates"][0]["content"]["parts"][0]["text"])
    for l in ("ar", "fr", "en"):
        assert new[l]["t"] and new[l]["d"]
except Exception as e:
    print("Generation failed:", e); sys.exit(1)
now = datetime.datetime.now(datetime.timezone.utc)
posts.insert(0, {"id": now.strftime("%Y%m%d%H%M"), "date": now.strftime("%Y-%m-%d"),
                 "ar": new["ar"], "fr": new["fr"], "en": new["en"]})
json.dump(posts[:12], open("posts.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)

const r = new URLSearchParams(window.location.search).get("r")
if(r) window.location.assign(r)

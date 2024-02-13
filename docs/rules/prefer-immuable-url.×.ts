var url = new URL(location.href);
url.hash = "#foo";

Object.assign(url, {
	search: "?"
});

setTimeout(() => {
	console.log('Hello');
}, 1000);

setInterval(() => {
	console.log('Hello');
}, 1000);
(function() {
	function setTimeout(a, b, c) { }
	function setInterval(a, b, c) { }

	setTimeout((msg) => {
		console.log(msg);
	}, 1000, 'Hello');

	setInterval((msg) => {
		console.log(msg);
	}, 1000, 'Hello');
})();

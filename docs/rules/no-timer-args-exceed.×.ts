setTimeout((msg) => {
	console.log(msg);
}, 1000, 'Hello');

setInterval((msg) => {
	console.log(msg);
}, 1000, 'Hello');

let args = [1, 2, 3];
setInterval((msg) => {
	console.log(msg);
}, 1000, ...args);

async function aaa() { }
await aaa();

async function bbb() {
	await aaa();
}

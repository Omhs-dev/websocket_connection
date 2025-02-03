console.log('WebSocket client');

const btn = document.getElementById('btn');
console.log("btn", btn);

const ws = new WebSocket('ws://localhost:3000');

btn.addEventListener('click', () => {
	console.log('Button clicked');

	// Send a message
	ws.send('Hello from client!');

	// Receive messages
	ws.onmessage = (event) => {
		console.log('Server says:', event.data);
	};
});
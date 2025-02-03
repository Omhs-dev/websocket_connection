const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Serve static files
app.use(express.static('public'));

// WebSocket connection handler
wss.on('connection', (ws) => {
	console.log('Client connected');

	// Receive messages from client
	ws.on('message', (message) => {
		console.log('Received:', message.toString());

		// Broadcast to all clients
		wss.clients.forEach((client) => {
			if (client !== ws && client.readyState === WebSocket.OPEN) {
				client.send(message.toString());
			}
		});
	});

	// Handle disconnection
	ws.on('close', () => {
		console.log('Client disconnected');
	});
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
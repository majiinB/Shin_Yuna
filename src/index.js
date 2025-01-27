require('dotenv').config();

const client = require('./config/discordConfig')

const readyHandler = require('./events/ready');
const messageHandler = require('./events/messageCreate');

// Attach events
client.on('ready', readyHandler);
client.on('messageCreate', messageHandler);

//login to application or bot
client.login(process.env.TOKEN).catch((err) => {
	console.error('Failed to log in:', err.message);
});
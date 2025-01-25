/*
*version 1.0.3
*/
// Destucture
require('dotenv').config();
console.log(process.env.TOKEN);


const Discord = require('discord.js');

const client = new Discord.Client({
	intents: [
		Discord.GatewayIntentBits.Guilds,
		Discord.GatewayIntentBits.GuildMembers,
		Discord.GatewayIntentBits.GuildMessages,
		Discord.GatewayIntentBits.MessageContent,
	],
});

const readyHandler = require('./events/ready');
const messageHandler = require('./events/messageCreate');

// Attach events
client.on('ready', readyHandler);
client.on('messageCreate', messageHandler);

//login to application or bot
client.login(process.env.TOKEN).catch((err) => {
    console.error('Failed to log in:', err.message);
});
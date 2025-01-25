const { searchForMention } = require('../utils/searchForMention');
const notificationService = require('../services/notificationService');
const { handleActivate, handleDeactivate } = require('../commands/activateBot');
const { handleEvaluate } = require('../commands/evaluate');
const { handleGeneralCommands } = require('../commands/general');

let isBotActive = false;

module.exports = async (msg) => {
    if (msg.author.bot) return; // Ignore bot messages

    const message = msg.content.toLowerCase().trim();
    const parts = message.split(' ');
    const command = parts[0];

    // Handle mentions
    if (searchForMention(parts)) {
        notificationService.sendNotification(msg);
        return;
    }

    if (isBotActive) {
        if (command === 'hello') {
            handleGeneralCommands.hello(msg);
        } else if (command === 'evaluate') {
            handleEvaluate(msg, parts);
        } else if (command === 'help') {
            handleGeneralCommands.help(msg);
        } else if (msg.content === 'bye yuna') {
            isBotActive = handleDeactivate(msg);
        } else {
            msg.reply('Sorry, I don’t understand what you’re trying to say 😥');
        }
    } else if (msg.content === 'hey yuna') {
        isBotActive = handleActivate(msg);
    }
};

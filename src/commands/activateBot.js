async function handleActivate(msg) {
    await msg.channel.sendTyping();
    msg.reply('Hey! What can I do for you 🤔');
    return true;
}

async function handleDeactivate(msg) {
    await msg.channel.sendTyping();
    msg.reply('Bye 😴');
    return false;
}

module.exports = { handleActivate, handleDeactivate };
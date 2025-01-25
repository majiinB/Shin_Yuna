async function hello(msg) {
    await msg.channel.sendTyping();
    msg.reply(`Hey ${msg.author.username}!`);
}

async function help(msg) {
    const user = await msg.author.createDM();
    user.send(`Hello! Here are the commands you can use:
                - **'hello'**
                - **'evaluate <expression>'**
                - **'help'**
                - **'hey yuna'** (to activate)
                - **'bye yuna'** (to deactivate)`);
}

module.exports = { hello, help };

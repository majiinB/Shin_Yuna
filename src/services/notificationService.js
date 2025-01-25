module.exports = {
    async sendNotification(msg) {
        const userId = '466893830457655296'; // Replace with your ID
        const user = await msg.client.users.fetch(userId);
        const sender = msg.author.username;
        const channel = msg.channel.name;
        const server = msg.guild.name;

        user.send(
            `Hey Majin, you have been mentioned!
            **Sender:** ${sender}
            **Server:** ${server}
            **Channel:** ${channel}
            **Message:** ${msg.content}`
        );
    },
};

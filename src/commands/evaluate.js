const { evaluateExpression } = require('../services/evalutationService');

async function handleEvaluate(msg, parts) {
    let expression = parts.slice(1).join(' ');
    const result = evaluateExpression(expression);

    await msg.channel.sendTyping();
    msg.reply(
        typeof result === 'number'
            ? `The answer to this is ${result.toFixed(2)}`
            : result
    );
}

module.exports = { handleEvaluate };

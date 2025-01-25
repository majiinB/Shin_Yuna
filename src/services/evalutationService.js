function evaluateExpression(expression) {
    try {
        const result = eval(expression);
        return typeof result === 'number' ? result : 'Invalid expression.';
    } catch {
        return 'Invalid expression. Please use numbers and valid operators.';
    }
}

module.exports = { evaluateExpression };

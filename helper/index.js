function isBoolean(value) {
    return value === 'true' || value === 'false';
}

function parseBoolean(value) {
    return value === 'true';
}

module.exports = {
    isBoolean,
    parseBoolean
}

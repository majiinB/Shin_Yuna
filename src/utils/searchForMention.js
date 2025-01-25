function searchForMention(parts) {
    return parts.some(
        (part) => part === '@everyone' || part === '<@466893830457655296>'
    );
}

module.exports = { searchForMention };

export function getRandom(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

export function calculateHP(level, heroClass) {
    switch (heroClass) {
        case 'warrior':
            return 110 * level;
        case 'thief':
            return 100 * level;
        case 'wizard':
            return 90 * level;
        default:
            return 0;
    }
}
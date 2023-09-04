export function roll(diceAmount, diceSides) {
    let total = 0;
    for (let i = 0; i < diceAmount; i++) {
        console.log(rollOne(diceSides));
    }
}
function rollOne(diceSides) {
    return Math.floor(Math.random() * diceSides) + 1;
}

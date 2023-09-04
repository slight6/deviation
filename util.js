export function roll(diceAmount, diceSides) {
    let total = [];
    for (let i = 0; i < diceAmount; i++) {
        let roll = rollOne(diceSides);
        total.push(roll);
        total.sort();
    }
    total.reverse().pop();
    return total;
}
function rollOne(diceSides) {
    return Math.floor(Math.random() * diceSides) + 1;
}

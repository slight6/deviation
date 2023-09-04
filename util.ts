

export function roll(diceAmount: number, diceSides: number) {
    let total = [];
    for (let i = 0; i < diceAmount; i++) {
        let roll: number = rollOne(diceSides);
        total.push(roll);
        total.sort();
        
    }
    total.reverse().pop();
    return total;

}


function rollOne(diceSides: number) {
    return Math.floor(Math.random() * diceSides) + 1;
}
// npx tsc -w

import { roll } from "./util.js";

const outputAmount = document.getElementById("rollOutput");


const rollDice = () => {
    console.log("Rolling dice...");
    console.log(roll(4, 6));
}


window.onload = () => {
    rollDice();


}

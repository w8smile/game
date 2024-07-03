import {Game} from "./game.js";


const game = new Game();

const {settings: {gridSize}} = game

const tableElement = document.querySelector("#grid");

for (let y = 0; y< gridSize.rows; y++) {
    const trElement = document.createElement("tr");
    for (let x = 0; x < gridSize.columns; x++) {
        const tdElement = document.createElement("td");
        trElement.append(tdElement);
    }
    tableElement.append(trElement);
}
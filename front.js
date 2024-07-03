import {Game} from "./game.js";
import {EventEmitter} from "./eventEmitter.js";

const eventEmitter = new EventEmitter();
const game = new Game(eventEmitter);

await game.start();


const {settings: {gridSize},
      player1,
      player2,
      google} = game

console.log(player1)

const tableElement = document.querySelector("#grid");

const render = () => {
    for (let y = 0; y< gridSize.rows; y++) {
        const trElement = document.createElement("tr");
        for (let x = 0; x < gridSize.columns; x++) {
            const tdElement = document.createElement("td");
            if (player1.position.x === x && player1.position.y === y) {
                const player1ImgElement = document.createElement("img");
                player1ImgElement.src = './assets/player1.png';
                tdElement.append(player1ImgElement);
            }
            trElement.append(tdElement);
            if (player2.position.x === x && player2.position.y === y) {
                const player2ImgElement = document.createElement("img");
                player2ImgElement.src = './assets/player2.png';
                tdElement.append(player2ImgElement);
            }
            trElement.append(tdElement);
            if (google.position.x === x && google.position.y === y) {
                const googleImgElement = document.createElement("img");
                googleImgElement.src = './assets/google.png';
                tdElement.append(googleImgElement);
            }
            trElement.append(tdElement);
        }
        tableElement.append(trElement);
    }
}


game.eventEmitter.subscribe('changePosition', render)
render()
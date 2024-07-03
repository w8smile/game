import {Game} from "./game.js";
import {EventEmitter} from "./eventEmitter.js";

const eventEmitter = new EventEmitter();
const game = new Game(eventEmitter);

game.settings = {pointsToWin: 3}

await game.start();


// const {
//           settings: {gridSize},
//           player1,
//           player2
//       } = game
const tableElement = document.querySelector("#grid");
const scoreElement = document.querySelector("#score");

window.addEventListener('keydown', (e)=>{
    switch(e.key) {
        case 'ArrowLeft':
            game.movePlayer1Left()
            break;
        case 'ArrowRight':
            game.movePlayer1Right()
            break;
        case 'ArrowUp':
            game.movePlayer1Up()
            break;
        case 'ArrowDown':
            game.movePlayer1Down()
            break;
        case 'a':
            game.movePlayer2Left()
            break;
        case 'd':
            game.movePlayer2Right()
            break;
        case 'w':
            game.movePlayer2Up()
            break;
        case 's':
            game.movePlayer2Down()
            break;
    }
})

const render = () => {
    tableElement.innerHTML = "";
    scoreElement.innerHTML = "";
    const {settings: {gridSize}, player1, player2, google, score} = game

    scoreElement.append(`player1: ${score[1].points} player2: ${score[2].points}`)
    for (let y = 1; y <= gridSize.rows; y++) {
        const trElement = document.createElement("tr");
        for (let x = 1; x <= gridSize.columns; x++) {
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
            if (google.position.x === x && google.position.y === y) {
                const googleImgElement = document.createElement("img");
                googleImgElement.src = './assets/google.png';
                tdElement.append(googleImgElement);
            }
        }
        tableElement.append(trElement);
    }
}


game.eventEmitter.subscribe('changePosition', render)
render()
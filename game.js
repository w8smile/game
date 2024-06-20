export class Game {
  #settings = {
    gridSize: {
      columns: 4,
      rows: 4,
    },
  };
  #status = "pending";
  #player1;
  #player2;
  #google;

  #getRandomPosition(existedPosition = []) {
    let newX;
    let newY;

    do {
      newX = NumberUtil.getRandomNumber(this.#settings.gridSize.columns);
      newY = NumberUtil.getRandomNumber(this.#settings.gridSize.rows);
    } while (existedPosition.some((pos) => newX === pos.x && newY === pos.y));

    const position = new Position(newX, newY);

    return position;
  }

  #createUnits() {
    const player1Position = this.#getRandomPosition();
    this.#player1 = new Player(player1Position, 1);

    const player2Position = this.#getRandomPosition([player1Position]);
    this.#player2 = new Player(player2Position, 2);

    const googlePosition = this.#getRandomPosition([
      player1Position,
      player2Position,
    ]);
    this.#google = new Google(googlePosition);
  }

  async start() {
    if (this.#status === "pending") {
      this.#status = "in-process";
      this.#createUnits();
    }
  }

  set settings(settings) {
    this.#settings = settings;
  }
  get settings() {
    return this.#settings;
  }
  get status() {
    return this.#status;
  }
  get player1() {
    return this.#player1;
  }
  get player2() {
    return this.#player2;
  }
  get google() {
    return this.#google;
  }
}

class Unit {
  constructor(position) {
    this.position = position;
  }
}

class Player extends Unit {
  constructor(position, id) {
    super(position);
    this.id = id;
  }
}

class Google extends Unit {
  constructor(position) {
    super(position);
  }
}

class Position {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class NumberUtil {
  static getRandomNumber(max) {
    return Math.floor(Math.random() * max + 1);
  }
}
class NumberUtil1 {


}

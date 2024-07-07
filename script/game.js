import Board from "./board.js";

export default class Game {
  constructor() {
    this.NO_POSITION = -1;
    this.board = new Board();
    this.turnedCards = [this.NO_POSITION, this.NO_POSITION];
  }

  startGame() {
    this.turnedCards = [this.NO_POSITION, this.NO_POSITION];
    this.board.shuffleCards();
  }

  getAction(position) {
    if (this.isFlipped(position)) {
      this.unflipCard(position);
      return "SET_BACK"
    }
    else {
      this.flipCard(position);
      return "SET_FRONT";
    }
  }
  getResult() {
    if (this.areBothFlipped()) {
      if (this.areEqual()) {
        return "CARDS_MATCH"
      }
      else {
        return "CARDS_DONT_MATCH"
      }
    }
  }

  areBothFlipped() {
    return !this.turnedCards.includes(this.NO_POSITION)
  }

  areEqual() {
    return this.board.areEqual(this.turnedCards[0], this.turnedCards[1])
  }

  nextTry() {
    this.turnedCards = [this.NO_POSITION, this.NO_POSITION]
  }

  isFlipped(position) {
    return this.turnedCards.includes(position)
  }

  getCardsFlipped() {
    return this.turnedCards;
  }

  flipCard(position) {
    if (this.turnedCards[0] == this.NO_POSITION) {
      this.turnedCards[0] = position;
    }
    else if (this.turnedCards[1] == this.NO_POSITION) {
      this.turnedCards[1] = position
    }
  }

  unflipCard(position) {
    if (this.turnedCards[0] == position) {
      this.turnedCards[0] = this.NO_POSITION;
    }
    else if (this.turnedCards[1] == position) {
      this.turnedCards[1] = this.NO_POSITION
    }
  }


  getSize() {
    return this.board.getSize();
  }
  getValue(position) {
    return this.board.getValue(position)
  }
}
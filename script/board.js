export default class Board {
  constructor() {
    this.cards = [
      "balloon.png",
      "bus.png",
      "cat.png",
      "commo.png",
      "cradle.png",
      "ghost.png",
      "knight.png",
      "nes.png",
      "balloon.png",
      "bus.png",
      "cat.png",
      "commo.png",
      "cradle.png",
      "ghost.png",
      "knight.png",
      "nes.png",
    ];
  }
  getSize() {
    return this.cards.length;
  }
  getValue(position) {
    return this.cards[position]
  }

  areEqual(position1, position2) {
    return this.cards[position1] == this.cards[position2];
  }

  shuffleCards() {
    for (let i = this.getSize() - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]]
    }
  }
}
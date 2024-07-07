import Game from "./game.js"
export default class View {
  constructor(game) {
    this.game = game;
    this.grid = [];
    this.path = `images/`;
    this.backImg = `${this.path}back.png`;
    this.backImg = `${this.path}back.png`;
    this.blankImg = `${this.path}checked.png`;
    document.querySelector(`.btn`).addEventListener("click", () => {
      this.start();
    })
    this.start();
  }

  start() {
    this.game.startGame();
    this.createGrid();
  }

  createGrid() {
    let gridEl = document.querySelector('.grid');
    while (gridEl.firstChild) {
      gridEl.removeChild(gridEl.firstChild);
    }
    const size = this.game.getSize();
    for (let i = 0; i < size; i++) {
      const card = document.createElement('img');
      card.setAttribute('src', this.backImg);
      gridEl.appendChild(card)
      let eventClick;
      card.addEventListener("click", eventClick = () => {
        this.onClickCard(i);
      })
      this.grid[i] = {
        'object': card,
        'click': eventClick
      }
    }
  }
  onClickCard(position) {
    const action = this.game.getAction(position)
    if (action == "SET_BACK") {
      this.setBack(position)
    }
    if (action == "SET_FRONT") {
      this.setFront(position)
    }
    const result = this.game.getResult();
    if (result == "CARDS_MATCH") {
      const cardsFlipped = this.game.getCardsFlipped();
      setTimeout(() => this.removeCards(cardsFlipped[0]), 500)
      setTimeout(() => this.removeCards(cardsFlipped[1]), 500)
      this.game.nextTry()
    }
    if (result == "CARDS_DONT_MATCH") {
      const cardsFlipped = this.game.getCardsFlipped();
      setTimeout(() => this.setBack(cardsFlipped[0]), 500)
      setTimeout(() => this.setBack(cardsFlipped[1]), 500)
      this.game.nextTry()
    }
  }

  setBack(position) {
    this.grid[position].object.setAttribute('src', this.backImg)
  }
  setFront(position) {
    this.grid[position].object.setAttribute('src', this.path + this.game.getValue(position))
  }

  removeCards(position) {
    this.grid[position].object.setAttribute('src', this.blankImg)
    this.grid[position].object.removeEventListener("click", this.grid[position].click)
  }
}

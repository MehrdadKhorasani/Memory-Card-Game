import Game from "./game.js"
import View from "./view.js"

export default class App {
  constructor() {
    const game = new Game()
    const view = new View(game)
  }
}
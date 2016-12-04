class GambleStore {

  constructor() {
    this.bindActions(this.alt.getActions('gamble'))
    this.gamble = null
    this.counter = 0
  }

  onStart() {
    if (this.gamble == null) {
      this.gamble = []
    }
    if (this.counter == null) {
      this.counter = 0
    }
    const userThrow = parseInt(Math.random() * 6, 10)
    const casinoThrow = parseInt(Math.random() * 6, 10)
    this.counter++
    this.gamble.push({ userThrow, casinoThrow })
  }

  onClear() {
    this.gamble = []
    this.counter = 0
  }
}

export default GambleStore

class GambleStore {

  constructor() {
    this.bindActions(this.alt.getActions('gamble'))
    this.gamble = null
  }

  onStart() {
    if (this.gamble == null) {
      this.gamble = []
    }
    const userThrow = parseInt(Math.random() * 6, 10)
    const casinoThrow = parseInt(Math.random() * 6, 10)
    this.gamble.push({ userThrow, casinoThrow })
  }

  onClear() {
    this.gamble = []
  }
}

export default GambleStore

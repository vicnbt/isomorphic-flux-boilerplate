class FormStore {

  constructor() {
    console.log('c2')
    this.bindActions(this.alt.getActions('form'))
    this.defaultData = { nameRef: '123', phoneRef: '', descrRef: '' }
    this.formData = this.defaultData
    this.searchResults = []
  }

  onUpdateSearch(name) {
    console.log('onUpdateSearch', name, this.fromData)
  }

  onSendData(data) {
    console.log('searchResults', this.searchResults)

    if (this.validate(data)) {
      this.searchResults.push(data)
      console.log('validated', name, data)
    } else {
      console.log('not validated', name, data)
    }
  }

  onReset() {
    this.fromData = this.defaultData
    console.log('reset')
  }

  validate(data) {
    return data.nameRef !== ''
  }
}

export default FormStore

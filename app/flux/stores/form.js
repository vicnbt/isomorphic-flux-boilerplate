import * as _ from 'lodash'

class FormStore {

  constructor() {
    this.bindActions(this.alt.getActions('form'))
    this.defaultData = { nameRef: '', phoneRef: '', descrRef: '' }
    this.formData = this.defaultData
    this.searchResults = []
    this.filteredResults = []
  }

  onUpdateSearch(name) {
    this.filteredResults = name.nameRef !== '' && _.filter(this.searchResults, (item) => item.nameRef.search(name.nameRef) !== -1) || []
    console.log('this.filteredResults', this.filteredResults)
  }

  onSendData(data) {
    if (this.validate(data)) {
      this.searchResults.push(JSON.parse(JSON.stringify(data)))
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

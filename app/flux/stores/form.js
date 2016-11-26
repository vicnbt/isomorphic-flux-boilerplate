import { aliasToReal as _ } from 'lodash/fp/_mapping'
class FormStore {

  constructor() {
    this.bindActions(this.alt.getActions('form'))
    this.defaultData = { nameRef: '', phoneRef: '', descrRef: '' }
    this.formData = this.defaultData
    this.searchResults = []
    this.filteredResults = []
  }

  onUpdateSearch(name) {
    console.log('onUpdateSearch', name)
    _.has(this.searchResults, { nameRef: 1 })
    // this.filteredResults = _.filter(this.searchResults, (item) => true || item.nameRef.search(name) !== -1) || []
    this.filteredResults = this.searchResults
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

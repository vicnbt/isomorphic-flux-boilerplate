import React, { Component, PropTypes } from 'react'
import connect from 'connect-alt'

class FormPage extends Component {

  static contextTypes = {
    flux: PropTypes.object.isRequired,
    i18n: PropTypes.func.isRequired
  }

  static propTypes = {
    formData: PropTypes.object.isRequired,
    searchResults: PropTypes.object.isRequired,
    filteredResults: PropTypes.object.isRequired
  }

  constructor(p) {
    super(p)
    this.state = {
      formData: p.formData,
      searchResults: p.searchResults,
      filteredResults: p.filteredResults || []
    }
  }

  updateForm(ref) {
    const { flux } = this.context
    const formData = this.state.formData
    formData[ref] = this.refs[ref].value
    this.setState(formData)
    flux.getActions('form').updateSearch(formData)
  }


  sendData() {
    const { flux } = this.context
    const formData = this.state.formData
    flux.getActions('form').sendData(formData)
  }

  clearForm() {
    // const { flux } = this.context
  }

  submitForm() {
    // const { flux } = this.context
  }

  render() {
    const s_ = this.state
    console.log(s_)
    return (
      <div>
        <p className='alert alert-info'>formtest</p>
        <div className='form-group'>
          <input type='text' placeholder='name' defaultValue={ s_.formData.nameRef } ref='nameRef' onChange={ this.updateForm.bind(this, 'nameRef') } />
          <br />
          <input type='text' placeholder='descr' defaultValue={ s_.formData.descrRef } ref='descrRef' onChange={ this.updateForm.bind(this, 'descrRef') } />
          <br />
          <input type='text' placeholder='phone' defaultValue={ s_.formData.phoneRef } ref='phoneRef' onChange={ this.updateForm.bind(this, 'phoneRef') } />
          <br />
          <button className='btn btn-primary' onClick={ ::this.sendData }>
            Add
          </button>
        </div>
        { s_.filteredResults.length > 0 && <div>already found</div> }
        <div>
          { s_.filteredResults.map((res) => {
            console.log('item', res)
            return <div>{ res.nameRef }</div>
          }) }
        </div>
        <div>
        </div>
      </div>
    )
  }

}

const reducer = ({ form: { form, formData, searchResults, filteredResults } }) => ({ form, formData, searchResults, filteredResults })
export default connect('form', reducer)(FormPage)


import React, { Component, PropTypes } from 'react'
import connect from 'connect-alt'

class GamblePage extends Component {

  static contextTypes = {
    flux: PropTypes.object.isRequired,
    i18n: PropTypes.func.isRequired
  }

  static propTypes = {
    gamble: PropTypes.array
  }

  startGamble() {
    const { flux } = this.context
    flux.getActions('gamble').start()
  }

  clearGamble() {
    const { flux } = this.context
    flux.getActions('gamble').clear()
  }

  render() {
    const { i18n } = this.context
    const { gamble } = this.props

    return (
      <div>
        <p className='alert alert-info'>{ i18n('login.help') }</p>
        <div className='form-group'>
          <button className='btn btn-primary' onClick={ ::this.startGamble }>
            { i18n('login.submit') }
          </button>
          <button className='btn btn-primary' onClick={ ::this.clearGamble }>
            Clear
          </button>
          { gamble && gamble.map((item) => <div>{ item.userThrow } { item.casinoThrow } { item.casinoThrow < item.userThrow ? 'win' : 'lose' }</div>) }
        </div>
      </div>
    )
  }

}

const reducer = ({ gamble: { gamble } }) => ({ gamble })
export default connect('gamble', reducer)(GamblePage)


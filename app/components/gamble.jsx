import capitalize from 'lodash/capitalize'
import defer from 'lodash/defer'

import React, { Component, PropTypes } from 'react'
import connect from 'connect-alt'

@connect(({ game: { collection } }) => ({ collection }))
class Gamble extends Component {

  static contextTypes = {
    flux: PropTypes.object.isRequired,
    i18n: PropTypes.func.isRequired
  }

  static propTypes = {
    params: PropTypes.object.isRequired,
    collection: PropTypes.array
  }

  componentWillMount() {
    const { flux } = this.context
    const { params: { seed } } = this.props

    this.updatePageTitle()
    flux.getActions('users').show(seed)
  }

  componentWillReceiveProps({ collection, params: { seed } }) {
    if ((collection.length !== this.props.collection.length) ||
        (seed !== this.props.params.seed)) {
      defer(() => this.updatePageTitle())
    }
  }

  render() {
    const user = this.getUser()

    if (user) {
      const { name: { first, last }, picture } = user

      return (
        <div className='app--profile text-center'>
          <h2>{ capitalize(first) } { capitalize(last) }</h2>
          <img
            src={ picture.medium }
            alt='profile' />
        </div>
      )
    }

    return (<h2>User not found</h2>)
  }

}

export default Gamble

import React, { Component, PropTypes } from 'react'

import Root from '../flux/REDUX-containers/Root.dev.js'

import Header from 'components/header'
import Footer from 'components/footer'

import configureStore from '../flux/REDUX-store/configureStore.dev'

/* istanbul ignore next */
if (process.env.BROWSER) require('styles/app.css')


let REDUXstore = configureStore()

class App extends Component {

  static propTypes = { children: PropTypes.node }
  static contextTypes = { flux: PropTypes.object.isRequired }

  state = { i18n: this.context
      .flux.getStore('locale').getState() }

  componentDidMount() {
    const { flux } = this.context
    flux.getStore('helmet').listen(this.handleTitleChange)
  }

  componentWillUnmount() {
    const { flux } = this.context
    flux.getStore('helmet').unlisten(this.handleTitleChange)
  }

  handleTitleChange({ titleBase, title }) {
    document.title = titleBase + title
  }

  render() {
    const { children } = this.props
    return (
      <div>
        <Header />
        <hr />
        <strong>Alt</strong>
        { children }
        <hr />
        <hr />
        <strong>REDUX</strong>
        <br />
        <br />
        <Root store={ REDUXstore } />
        <hr />
        <Footer />
      </div>
    )
  }

}

export default App

import React from 'react'

import axios from 'axios'

class Home extends React.Component {

  state = {
    setup: '',
    punchline: '',
    revealPunchline: false,
  }

  getJoke = (event) => {
    event.preventDefault()
    this.setState({
      setup: '',
      punchline: '',
    })
    axios
      .get('https://official-joke-api.appspot.com/jokes/random')
      .then(
        (response) => {
          // console.log(response)
          this.setState({
            setup: response.data.setup,
            punchline: response.data.punchline,
            revealPunchline: false,
          })
        },
        (error) => console.error(error)
      )
      .catch((error) => console.error(error))
  }

  revealPunchline = (event) => {
    this.setState({
      revealPunchline: true
    })
  }

  render = () => {
    return (
      <div>
        <h1>All The Feels</h1>
        <h4>Tagline Placeholder</h4>
        <br />
        <form onSubmit={this.getJoke}>
          <input type="submit" value="Tell me a joke!" />
        </form>
        <br />
        <h2>{this.state.setup}</h2>
        <br />
        <button onClick={this.revealPunchline}>Punchline</button>
        <br />
        {this.state.revealPunchline ? <h2>{this.state.punchline}</h2> : null}
      </div>
    )
  }
}

export default Home

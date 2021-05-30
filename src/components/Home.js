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
      <div id="home">
        <h1>All The Feels</h1>
        <h4>a mood-boosting experience</h4>
        <div className="app-about">
          <h2><b>Welcome!</b></h2>
          <p>Feeling down? Feeling like shit? Feeling like becoming a World dictator 'cause humans suck?</p>
          <p><b><u>You are not alone!</u></b></p>
          <p>Here at "All the Feels", you can anonymously vent and scream into the void known as the internet with other likeminded people of the world!</p>
        </div>

        <br />
        <div className="jokes">
        <h3>Do you like Jokes?</h3>
        <br />
        <form onSubmit={this.getJoke}>
          <input className="btn btn-light" type="submit" value="Tell me a joke!" />
        </form>
        <br />
        <h5><b>{this.state.setup}</b></h5>
        <br />
        <button className="btn btn-light" onClick={this.revealPunchline}>Punchline</button>
        <br />
        {this.state.revealPunchline ? <h5><b>{this.state.punchline}</b></h5> : null}
        </div>
      </div>
    )
  }
}

export default Home

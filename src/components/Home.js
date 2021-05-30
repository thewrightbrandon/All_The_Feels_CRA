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
        <h4>a mood boosting experience</h4>
        <div className="app-about">
          <h2> Welcome!</h2>
          <p>Feeling down? Feeling like shit? Feeling like becoming a world dictator cause humans sucks?</p>
          <p>There are a lot of people that feel the exact same!</p>
          <p>Here at "All the Feels", you can anonymously vent and scream into the void known as the internet with other likeminded people of the world!</p>

        </div>

        <br />
        <div className="jokes">
        <h4> Do you like Jokes?</h4>
        <form onSubmit={this.getJoke}>
          <input type="submit" value="Tell me a joke!" />
        </form>
        <br />
        <h5>{this.state.setup}</h5>
        <br />
        <button onClick={this.revealPunchline}>Punchline</button>
        <br />
        {this.state.revealPunchline ? <h5>{this.state.punchline}</h5> : null}
        </div>
      </div>
    )
  }
}

export default Home

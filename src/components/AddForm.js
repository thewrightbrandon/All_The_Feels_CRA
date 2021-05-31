import React from 'react'

import { withRouter } from 'react-router-dom'

class AddForm extends React.Component {

  state = {
    title: '',
    emotion: '',
    notes: '',
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = (event) => {
    this.props.addMood(this.state)
      this.setState({
        title: '',
        emotion: '',
        notes: '',
      })
  }

  handleClick = (event) => {
    event.preventDefault()
    this.handleSubmit()
    this.props.history.push('/Moods')
  }

  render = () => {
    return (
      <div id="addContainer">
        <h1>Vent Your Feelings</h1>
        <div id="add" >

          <form onSubmit={this.handleSubmit}>
            <label className="form-label" htmlFor="Title">Title</label>
            <input className="form-control" type="text" id="title" onChange={this.handleChange} value={this.state.title} required/>
            <br />
            <label className="form-label" htmlFor="emotion">Emotion</label>
            <select className="form-select" type="text" id="emotion" onChange={this.handleChange}
            value={this.state.emotion} required>
              <option value="">What's Your Mood...</option>
              <option value="Eating Cheetos in Bed">Eating Cheetos in Bed</option>
              <option value="Fish Out of Water">Fish Out of Water</option>
              <option value="Three Flat Tires">Three Flat Tires</option>
              <option value="Sharks Eating My Face">Sharks Eating My Face</option>
              <option value="Staring Into an Infinite Abyss">Staring Into an Infinite Abyss</option>
              <option value="Whiskey Shots on the Train Tracks">Whiskey Shots on the Train Tracks</option>
              <option value="Stepped on a Lego">Stepped on a Lego</option>
              <option value="Popcorn Kernel in Your Teeth">Popcorn Kernel in Your Teeth</option>
              <option value="Tripping Up the Stairs">Tripping Up the Stairs</option>
              <option value="Someone Tresspassing in My Swamp">Someone Tresspassing in My Swamp</option>
            </select>
            <br />
            <label className="form-label" htmlFor="notes">Notes</label>
            <textarea className="form-control" type="text" id="notes" onChange={this.handleChange} value={this.state.notes}
            placeholder="Why are you feeling this way?" rows="3" required>
            </textarea>
            <br />
            <input className="btn btn-light addButton" type="submit" value="Create the Feels"
            onClick={this.handleClick} />
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(AddForm)

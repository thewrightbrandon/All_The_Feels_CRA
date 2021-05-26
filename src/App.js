import React from 'react'

import axios from 'axios'

class App extends React.Component {

  state = {
    title: '',
    emotion: '',
    notes: '',
    moods: [],
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    axios
      .post('https://all-the-feels.herokuapp.com/api/moods', this.state)
      .then(
        (response) => {
          this.getMoods()
          this.setState({
            title: '',
            emotion: '',
            notes: '',
          })
        }
      )
  }

  getMoods = () => {
    axios
      .get('https://all-the-feels.herokuapp.com/api/moods')
      .then(
        (response) => {
          this.setState({ moods: response.data })
        },
        (err) => {
          console.log(err)
        }
      )
      .catch((error) => {
        console.log(error)
      })
  }

  updateMood = (event) => {
    event.preventDefault()
    const id = event.target.id
    axios
      .put('https://all-the-feels.herokuapp.com/api/moods/' + id, this.state)
      .then(
        (response) => {
          this.getMoods()
          this.setState({
            title: '',
            emotion: '',
            notes: '',
          })
        }
      )
  }

  deleteMood = (event) => {
    axios
      .delete('https://all-the-feels.herokuapp.com/api/moods/' + event.target.value)
      .then(
        (response) => {
          this.getMoods()
        }
      )
  }

  componentDidMount = () => {
    this.getMoods()
  }

  render = () => {
    return (
      <div>
      <h1>All The Feels</h1>
      <h2>Create New Person</h2>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" onChange={this.handleChange} value={this.state.title} />
        <br />
        <label htmlFor="emotion">Emotion</label>
        <select type="text" id="emotion" onChange={this.handleChange} value={this.state.emotion}>
          <option value="">How are you feeling...</option>
          <option value="Happy">Happy</option>
          <option value="Sad">Sad</option>
          <option value="Angry">Angry</option>
          <option value="Scared">Scared</option>
          <option value="Excited">Excited</option>
          <option value="Moody">Moody</option>
          <option value="Depressed">Depressed</option>
          <option value="Gleeful">Gleeful</option>
        </select>
        <br />
        <label htmlFor="notes">Notes</label>
        <textarea type="text" id="notes" onChange={this.handleChange} value={this.state.notes}
        placeholder="Why are you feeling this way?" rows="6" cols="50">
        </textarea>
        <br />
        <input type="submit" value="Create the feels" />
      </form>
        {this.state.moods.map((mood) => {
          return (
            <div className="mood" key={mood.id}>
              <h2>{mood.title}</h2>
              <h4>Feels: {mood.emotion}</h4>
              <h4>Notes: {mood.notes}</h4>
              <h6>{mood.created_at}</h6>
              <details>
                <summary>Edit Mood</summary>
                <form id={mood.id} onSubmit={this.updateMood}>
                  <label htmlFor="title">Title</label>
                  <input type="text" id="title" onChange={this.handleChange} />
                  <br />
                  <label htmlFor="emotion">Emotion</label>
                  <select type="text" id="emotion" onChange={this.handleChange}>
                    <option value="">How are you feeling...</option>
                    <option value="Happy">Happy</option>
                    <option value="Sad">Sad</option>
                    <option value="Angry">Angry</option>
                    <option value="Scared">Scared</option>
                    <option value="Excited">Excited</option>
                    <option value="Moody">Moody</option>
                    <option value="Depressed">Depressed</option>
                    <option value="Gleeful">Gleeful</option>
                  </select>
                  <br />
                  <label htmlFor="notes">Notes</label>
                  <textarea type="text" id="notes" onChange={this.handleChange}
                  placeholder="Why are you feeling this way?" rows="6" cols="50">
                  </textarea>
                  <br />
                  <input type="submit" value="Edit the feels" />
                </form>
              </details>
              <button onClick={this.deleteMood} value={mood.id}>
                Delete
              </button>
            </div>
          )
        })}
      </div>
    )
  }
}

export default App

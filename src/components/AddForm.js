import React from 'react'

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
    event.preventDefault()
    this.props.addMood(this.state)
      this.setState({
        title: '',
        emotion: '',
        notes: '',
      })
  }

  render = () => {
    return (
      <div>
        <h2>Vent Your Feelings</h2>
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
      </div>
    )
  }
}

export default AddForm

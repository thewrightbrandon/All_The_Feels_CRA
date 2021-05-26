import React from 'react'

class Moods extends React.Component {
  render = () => {
    return (
      <div>
        <h2>{this.props.mood.title}</h2>
        <h4>Feels: {this.props.mood.emotion}</h4>
        <h4>Notes: {this.props.mood.notes}</h4>
        <h6>{this.props.mood.created_at}</h6>
        <details>
          <summary>Edit Mood</summary>
          <form id={this.props.mood.id} onSubmit={this.props.updateMood}>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.props.handleChange} />
            <br />
            <label htmlFor="emotion">Emotion</label>
            <select type="text" id="emotion" onChange={this.props.handleChange}>
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
            <textarea type="text" id="notes" onChange={this.props.handleChange}
            placeholder="Why are you feeling this way?" rows="6" cols="50">
            </textarea>
            <br />
            <input type="submit" value="Edit the feels" />
          </form>
        </details>
        <button onClick={this.props.deleteMood} value={this.props.mood.id}>
          Delete
        </button>
      </div>
    )
  }
}

export default Moods

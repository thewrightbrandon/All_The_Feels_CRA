import React from 'react'

import axios from 'axios'

import AddComment from './AddComment'
import Comments from './Comments'

class Moods extends React.Component {

  state = {
    comments: [],
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    })
  }

  addComment = (mood) => {
    axios
      .post('https://all-the-feels.herokuapp.com/api/comments', mood)
      .then(
        (response) => {
          this.getComments()
        }
      )
  }

  getComments = () => {
    axios
      .get('https://all-the-feels.herokuapp.com/api/comments')
      .then(
        (response) => {
          this.setState({ comments: response.data })
        },
        (err) => {
          console.log(err)
        }
      )
      .catch((error) => {
        console.log(error)
      })
  }

  componentDidMount = () => {
    this.getComments()
  }

  render = () => {
    return (
      <div>
        <h2>{this.props.mood.title}</h2>
        <h4>Feels: {this.props.mood.emotion}</h4>
        <h4>Notes: {this.props.mood.notes}</h4>
        <h6>{this.props.mood.created_at}</h6>
        <details>
          <summary>Read Comments</summary>
            {this.state.comments.map((comment) => {
              if (comment.mood === this.props.mood.id) {
                return (
                  <Comments
                    key={comment.id}
                    comment={comment}
                  />
                )
              } else {
                return null
              }
            })}
        </details>
        <AddComment
          addComment={this.addComment}
          mood={this.props.mood}
        />
        <details>
          <summary>Edit Mood</summary>
          <form id={this.props.mood.id} onSubmit={this.props.updateMood}>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.props.handleChange} required />
            <br />
            <label htmlFor="emotion">Emotion</label>
            <select type="text" id="emotion" onChange={this.props.handleChange} required>
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
            <label htmlFor="notes">Notes</label>
            <textarea type="text" id="notes" onChange={this.props.handleChange}
            placeholder="Why are you feeling this way?" required>
            </textarea>
            <br />
            <input type="submit" value="Edit the Feels" />
          </form>
          <button onClick={this.props.deleteMood} value={this.props.mood.id}>
            Delete the Feels
          </button>
        </details>
      </div>
    )
  }
}

export default Moods

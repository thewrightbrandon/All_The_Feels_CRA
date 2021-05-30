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
      <div className="moods">
        <h1>{this.props.mood.title}</h1>
        <h4><b>Feels:</b> {this.props.mood.emotion}</h4>
        <h5>{this.props.mood.notes}</h5>
        <h6>{this.props.mood.created_at}</h6>
        <details className="commentDetails">
          <summary>Read Comments</summary>
            <div className="commentDiv">
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
            </div>
        </details>
        <AddComment
          addComment={this.addComment}
          mood={this.props.mood}
        />
        <details className="edit">
          <summary>Edit Mood</summary>
          <form className="editForm" id={this.props.mood.id} onSubmit={this.props.updateMood}>
            <label className="form-label" htmlFor="title">Title</label>
            <input className="form-control" type="text" id="title" onChange={this.props.handleChange} required />

            <label className="form-label" htmlFor="emotion">Emotion</label>
            <select className="form-select" type="text" id="emotion" onChange={this.props.handleChange} required>
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

            <label className="form-label" htmlFor="notes">Notes</label>
            <textarea className="form-control" type="text" id="notes" onChange={this.props.handleChange}
            placeholder="Why are you feeling this way?" rows="6" required>
            </textarea>
            <input className="btn btn-light editButton" type="submit" value="Edit the Feels" />
            <button className="btn btn-danger deleteButton" onClick={this.props.deleteMood} value={this.props.mood.id}>
              Delete the Feels
            </button>
          </form>
        </details>
      </div>
    )
  }
}

export default Moods

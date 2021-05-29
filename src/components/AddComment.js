import React from 'react'

class AddComment extends React.Component {

  state = {
    mood: this.props.mood.id,
    name: '',
    body: '',
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addComment(this.state)
      this.setState({
        name: '',
        body: '',
      })
  }

  render = () => {
    return (
      <div>
        <details>
          <summary>Add Comment</summary>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="name">Title</label>
              <input type="text" id="name" onChange={this.handleChange}
              value={this.state.name} required />
              <br />
              <label htmlFor="body">Comment</label>
              <textarea type="text" id="body" onChange={this.handleChange} value={this.state.body}
              placeholder="Comment here..." required >
              </textarea>
              <br />
              <input type="submit" value="Add Comment" />
            </form>
        </details>
      </div>
    )
  }
}

export default AddComment

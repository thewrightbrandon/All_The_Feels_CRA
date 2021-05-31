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
      <div id="comments">
        <details>
          <summary>Add Comment</summary>
            <form onSubmit={this.handleSubmit}>
              <label className="form-label" htmlFor="name">Name</label>
              <input className="form-control" type="text" id="name" onChange={this.handleChange}
              value={this.state.name} required />
              <label className="form-label" htmlFor="body">Comment</label>
              <textarea className="form-control" type="text" id="body" onChange={this.handleChange} value={this.state.body} placeholder="Comment here..." rows="3" required >
              </textarea>
              <input className="btn btn-light addCommentButton" type="submit" value="Add Comment" />
            </form>
        </details>
      </div>
    )
  }
}

export default AddComment

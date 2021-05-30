import React from 'react'

class Comments extends React.Component {

  render = () => {
    return (
      <div id="view-comments">
        <h5>From: {this.props.comment.name}</h5>
        <h6>{this.props.comment.body}</h6>
      </div>
    )
  }
}

export default Comments

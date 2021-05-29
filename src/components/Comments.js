import React from 'react'

class Comments extends React.Component {

  render = () => {
    return (
      <div>
        <h3>From: {this.props.comment.name}</h3>
        <h4>{this.props.comment.body}</h4>
      </div>
    )
  }
}

export default Comments

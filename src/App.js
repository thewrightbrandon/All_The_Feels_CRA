import React from 'react'

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import axios from 'axios'

import Home from './components/Home'
import AddForm from './components/AddForm'
import MoodChart from './components/MoodChart'
import Moods from './components/Moods'

class App extends React.Component {

  state = {
    moods: [],
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    })
  }

  addMood = (mood) => {
    axios
      .post('https://all-the-feels.herokuapp.com/api/moods', mood)
      .then(
        (response) => {
          this.getMoods()
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
      <BrowserRouter>
        <div>
          <nav className="navbar">
            <ul className="container-fluid navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to='/'>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/AddForm'>Add Mood</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/Moods'>View Moods</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/MoodChart'>Mood Chart</Link>
              </li>
            </ul>
          </nav>
          <div className="container">
            <Switch>
              <Route exact path='/'>
                <h1>All The Feels</h1>
                <Home />
              </Route>
              <Route path='/AddForm'>
                <AddForm
                  addMood={this.addMood}
                />
              </Route>
              <Route path='/Moods'>
                {this.state.moods.map((mood) => {
                  return (
                    <Moods
                      key={mood.id}
                      mood={mood}
                      updateMood={this.updateMood}
                      deleteMood={this.deleteMood}
                      handleChange={this.handleChange}
                    />
                  )
                })}
              </Route>
              <Route path='/MoodChart'>
                <MoodChart />
              </Route>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App

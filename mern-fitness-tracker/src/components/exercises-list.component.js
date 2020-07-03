import React, { Component } from 'react';
// eslint-disable-next-line
import { Link } from 'react-router-dom';
import axios from 'axios';

// eslint-disable-next-line
const Exercise = Props => {
  // <tr>
  //   <td>{props.exercise.username}</td>
  //   <td>{props.exercise.description}</td>
  //   <td>{props.exercise.duration}</td>
  //   <td>{props.exercise.date.substring(0, 10)}</td>
  // </tr>
  // <Link to={"/edit/"+props.exercise._id}>edit</Link>
  // | <a href="#" onClick={() => props.deleteExercise(props.exrcise._id)}>delete</a>
}

export default class ExerciseList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this);

    this.state = {exrecises: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/exercises')
    .then(response => {
      this.setState({ exercises: response.data })
    })
    .catch((error) => {
      console.log(error);
    })
  }

  deleteExercise(id) {
    axios.delete('http://localhost:5000/exrcises/'+id)
    .then(res => console.log(res.data))

    this.setState({
      exrecises: this.state.exercises.filter(el => el._id  !== id)
    })
  }

  // exerciseList() {
  //   return this.state.exercises.map(currentexercise => {
  //     return  <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
  //   })
  // }

  render() {
    return (
      <div>
        <h3>Logged Exercises</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <p>You are on Exercise List component.. Coming soon....</p>
            {/* { this.exerciseList() } */}
          </tbody>
        </table>
      </div>
    )
  }
}
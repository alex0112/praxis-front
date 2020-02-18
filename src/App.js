import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HabitList from './components/habit_list';

class App extends Component {
  render() {
    return (
	<div>
	  <HabitList/>
	</div>
    );
  }
}

export default App;

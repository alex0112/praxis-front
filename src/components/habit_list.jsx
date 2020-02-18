import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

//import { Wrapper } from '../src/api_wrapper';

export default class HabitList extends Component {
    render() {
	return (
	    <Table striped bordered condensed hover>
	      <thead>
		<tr>
		  <th>#</th>
		  <th>First Name</th>
		  <th>Last Name</th>
		  <th>Username</th>
		</tr>
	      </thead>
	      <tbody>
		<tr>
		  <td>1</td>
		  <td>Mark</td>
		  <td>Otto</td>
		  <td>@mdo</td>
		</tr>
		<tr>
		  <td>3</td>
		  <td colSpan="2">Larry the Bird</td>
		  <td>@twitter</td>
		</tr>
	      </tbody>
	      </Table>
	    );
    }
}

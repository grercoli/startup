import React, { Component } from 'react';
import EditMovie from './EditMovie';

//REDUX
import { connect } from 'react-redux';
import { deleteMovie } from '../actions/moviesActions';

class Movie extends Component {

	state = {
		editStatus: false
	}
	
	newNameRef = React.createRef();

	editMovie = (e) => {
		e.preventDefault();

		this.setState({
			editStatus: true
		})
	}

	changeState = () => {
		this.setState({
			editStatus: false
		})
	}

	deleteMovie = (e) => {
		e.preventDefault();
		
		this.props.deleteMovie(this.props.info.id);
	}

	render() {
		const editStatus = this.state.editStatus;
		return (
			<React.Fragment>
			<li>
				<span>{this.props.info.name}</span>
				<button className="editBtn" onClick={this.editMovie}>Edit</button>
				<button onClick={this.deleteMovie}>Delete</button>

				{ editStatus ? <EditMovie info={this.props.info} changeState={this.changeState} /> : ''}
			</li>
			</React.Fragment>
		);
	}
}

export default connect(null, {deleteMovie}) (Movie);
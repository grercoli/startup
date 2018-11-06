import React, { Component } from 'react';

class EditMovie extends Component {
	newNameRef = React.createRef();

	editMovie = (e) => {
		e.preventDefault();

		const id = this.props.info.id;
		
		const movie = {
			id,
			name: this.newNameRef.current.value
		}

		this.props.editMovie(movie, id);

		this.props.changeState();
	}

	render() {
		return (
			<form onSubmit={this.editMovie}>
				<div>
					<label>Movie Name:</label>
					<input type="text" ref={this.newNameRef} defaultValue={this.props.info.name} />
				</div>
				<button type="submit">Save</button>
			</form>
		);
	}
}

export default EditMovie;
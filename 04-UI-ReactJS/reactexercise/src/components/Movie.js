import React, { Component } from 'react';

class Movie extends Component {
	
	newNameRef = React.createRef();

	render() {
		return (
			<React.Fragment>
			<li>
				<span>{this.props.info.name}</span>
			</li>
			</React.Fragment>
		);
	}
}

export default Movie;
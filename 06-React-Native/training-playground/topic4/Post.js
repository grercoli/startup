import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import TouchOpacity from './TouchOpacity';
import styles from './styles';

class Post extends React.Component {
	
	state = {
  		user: {}
  	};

  	fetchUsers() {
  		const post = this.props.navigation.getParam('post');
    	return fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
      	.then((response) => response.json())
      	.then((responseJson) => {

	        this.setState({
	          user: responseJson,
	          
	        }, function(){

	        });

      	})
      	.catch((error) =>{
        	console.error(error);
      	});
  	}
	componentDidMount(){
		//Calling a function fetchUsers to dont load to much componentDidMount
		this.fetchUsers();
  	}

	render() {
		const post = this.props.navigation.getParam('post');
	  	return (
	    	<View>
	      		<Text style={styles.postTitle}>{post.title}</Text>
	      		<Text>by {this.state.user.name} | Username: {this.state.user.username} | Email: {this.state.user.email}</Text>
	      		<Text style={styles.postBody}>{post.body}</Text>
	    	</View>
	  	);
  	}
}

export default Post;
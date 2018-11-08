import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TouchOpacity from './TouchOpacity';
import styles from './styles';

class Post extends React.Component {
	
	render() {
		const post = this.props.navigation.getParam('post');
	  	return (
	    	<View>
	      		<Text style={styles.postTitle}>{post.title}</Text>
	      		<Text>by User: {post.userId}</Text>
	      		<Text style={styles.postBody}>{post.body}</Text>
	    	</View>
	  	);
  	}
}

export default Post;
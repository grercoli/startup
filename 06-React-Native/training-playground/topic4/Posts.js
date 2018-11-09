import React from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import TouchOpacity from './TouchOpacity';
import styles from './styles';

class Posts extends React.Component {
  
  state = {
  	isLoading: true,
  };

  componentDidMount(){
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          dataSource: responseJson,
          isLoading: false,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render() {
  	
  	if(this.state.isLoading){
      return(
        <View style={styles.activityIndicator}>
          <ActivityIndicator size='large' color='#00ff00'/>
        </View>
      )
    }

    return (
      <View>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => {
          	return (
          		<TouchableOpacity 
          			onPress={() => this.props.navigation.navigate('Post', {post: item})}>
	          		<View style={styles.postContent}>
	          			<Text style={styles.postTitle}>{item.title}</Text>
	          			<Text style={styles.postBody}>{item.body}</Text>
	          		</View>
          		</TouchableOpacity>
          		)}}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

export default Posts;
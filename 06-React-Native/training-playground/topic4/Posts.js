import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import TouchOpacity from './TouchOpacity';
import styles from './styles';

class Posts extends React.Component {
  
  state = {};

  componentDidMount(){
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          dataSource: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => {
          	return (
          		<View style={styles.postContent}>
          			<Text style={styles.postTitle}>{item.title}</Text>
          			<Text style={styles.postBody}>{item.body}</Text>
          		</View>
          		)}}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

export default Posts;
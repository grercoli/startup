import React, {Component} from 'react';
import {View, Platform, Image, Text} from 'react-native';
import styles from './styles';

export default class ExerciseSeven extends Component {
  render() {
    return (
      <View style={styles.articleContainer}>
        <View style={styles.articleDescription}>
          <Text style={styles.title}>
            Sed sagittis velit eget sapien tempor eleifend. Nulla eu vestibulum urna. Sed pulvinar nisl ut faucibus ultrices.
          </Text>
          <Text style={styles.author}>
            by <Text style={styles.authorColor}>Gustavo Ercoli</Text>
          </Text>
          <Text style={styles.plot}>
            Aliquam quis ultrices felis. In feugiat arcu eget ligula commodo, semper iaculis magna rhoncus. Donec sit amet leo tellus. Quisque vitae diam vestibulum, rutrum lorem id, sagittis lacus. Nullam tellus metus, porttitor a malesuada vel, accumsan euismod risus. Maecenas in sapien a arcu posuere interdum eget in mi. Quisque dictum malesuada sapien, fringilla vulputate mauris. Sed egestas ante vitae nibh venenatis maximus. Phasellus ut ullamcorper orci. Nullam imperdiet dignissim ante vel interdum.
          </Text>
          <View style={styles.socialMedias}>
            <Image 
              style={styles.socialMediaImg}
              source={{uri: 'http://karicau.com/wp-content/uploads/2017/02/1487543630_square-facebook.png'}}
            />
            <Image 
              style={styles.socialMediaImg}
              source={{uri: 'http://www.webmastercreativo.com/wp-content/uploads/2016/06/1464901733_square-twitter.png'}}
            />
            <Image 
              style={styles.socialMediaImg}
              source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe7lGgrO4A1X4rH7IblziUsZjd1HvlwjBExd59Au67NyN0XOkL3w'}}
            />
            <Image 
              style={styles.socialMediaImg}
              source={{uri: 'http://entrecreativos.com/wp-content/uploads/2014/03/Motivos-para-usar-Pinterest-infograf%C3%ADa.png'}}
            />
          </View>
        </View>
        <View style={styles.image}>
          <Image 
            style={{width: 100, height: 100}}
            source={{uri: 'https://as00.epimg.net/meristation/imagenes/2018/10/03/noticias/1538558784_151693_1538558817_noticia_normal.jpg'}}
          />
        </View>
      </View>
    );
  }
};
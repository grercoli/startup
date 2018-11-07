import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 10,
    backgroundColor: '#26abaf'
  },
  articleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
    borderStyle: 'solid',
    padding: 10
  },
  articleDescription: {
    flex: 1
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14
  },
  author: {
    fontWeight: 'bold',
    fontSize: 12,
    marginTop: 5,
    marginBottom: 5
  },
  authorColor: {
    color: 'blue'
  },
  plot: {
    fontSize: 12
  },
  socialMedias: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingTop: 5,
    paddingBottom: 5
  },
  socialMediaImg: {
    width:25,
    height:25,
    marginRight: 5
  },
  image: {
    paddingLeft: 5,
    alignSelf: 'center',
  }
});

export default styles;
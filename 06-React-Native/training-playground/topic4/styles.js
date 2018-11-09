import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  primaryBtn: {
    alignItems: 'center',
    backgroundColor: '#26ABAF',
    borderRadius: 5,
    padding: 10,
    width: '50%'
  },
  secondaryBtn: {
    alignItems: 'center',
    backgroundColor: '#DDD',
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    width: '50%',
    marginTop: 5
  },
  disabledBtn: {
    opacity: 0.5
  },
  postContent: {
    borderWidth: 1,
    borderColor: '#000',
    borderStyle: 'solid',
    padding: 10,
    margin: 5
  },
  postTitle: {
    fontWeight: 'bold',
    fontSize: 14
  },
  postBody: {
    marginTop: 5
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center'
  }
});

export default styles;
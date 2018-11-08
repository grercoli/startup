import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10
  },
  textContainer: {
    flexGrow: 1
  },
  alternative: {
    flexDirection: 'row'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDD',
    padding: 10
  },
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
  }
});

export default styles;
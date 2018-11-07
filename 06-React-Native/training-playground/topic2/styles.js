import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 500,
    height: 500,
    alignItems: 'flex-start',
    padding: 10,
    backgroundColor: '#26abaf'
  },
  item1: {
    width: 100,
    height: 100,
    marginBottom: 10,
    backgroundColor: '#c42f25'
  },
  item2: {
    width: 200,
    height: 100,
    flexGrow: 1,
    marginBottom: 10,
    backgroundColor: '#8d1cd1'
  },
  item3: {
	width: 300,
	height: 100,
	flexGrow: 2,
	backgroundColor: '#fff',
	marginBottom: 50
  },
  borderStyle: {
  	borderWidth: 3,
  	borderColor: '#000',
  	borderStyle: 'solid'
  }
});

export default styles;
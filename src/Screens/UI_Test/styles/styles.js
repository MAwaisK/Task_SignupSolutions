import {StyleSheet} from 'react-native';
import {width, height, totalSize} from 'react-native-dimension';
const styles = StyleSheet.create({
  Main: {
    flex: 1,
    width: '94%',
    alignSelf: 'center',
  },
  Header: {
    flex: 0.15,
    marginVertical: height(2.5),
  },
  HeaderBigText: {
    color: '#000',
    fontSize: totalSize(3),
    fontWeight: '600',
  },
  HeaderText: {
    color: '#000',
    fontSize: totalSize(1.9),
    fontWeight: '500',
  },
  SearchContainer: {
    backgroundColor: 'rgba(245,255,255,1)',
    borderRadius: 10,
    flexDirection: 'row',
    marginTop: height(1.2),
  },
  TextInputContainer: {
    flex: 0.85,
    height: height(5),
  },
  TextInputStyle: {
    flex: 1,
    height: height(5),
    padding: 0,
    paddingLeft: height(1.2),
  },
  IconContainer: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    borderRadius: 10,
  },
  SearchIcon: {
    height: height(3.6),
    width: height(3.6),
  },
  Body: {
    flex: 0.83,
  },
});

export default styles;

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'left',
    color: '#000',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    color: '#000',
    width: '100%',
    fontSize: 20,
    marginTop: 20,
  },
  closeIcon: {
    position: 'absolute',
    top: 40,
    left: 10,
  },
});
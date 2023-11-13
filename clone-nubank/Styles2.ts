import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    width: '100%',
    marginTop: 30,
  },
  logo: {
    marginTop: 20,
    width: 70,
    height: 45,
    resizeMode: 'contain',
  },
  countrySelectorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(75, 0, 130, 0.10)',
    borderRadius: 50, 
    paddingVertical: 7, 
    paddingHorizontal: 15, 
    marginTop:15,
  },
  countrySelectorText: {
    color: '#FFF',
    fontSize: 20,
  },
  arrowDownIcon: {
    fontSize: 24,
    color: '#FFF',
    marginLeft: 5,
  },
  textContainer: {
    marginTop: 480,
  },
  bottomText: {
    color: '#FFF',
    fontSize: 30,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#820AD1',
    paddingVertical: 20,
    paddingHorizontal: 140,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#F8F8FF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textEntrarContainer: {
    marginTop: 20,
  },
  textEntrar: {
    fontSize: 15,
    color: '#FFF',
    textAlign: 'center',
  },
});
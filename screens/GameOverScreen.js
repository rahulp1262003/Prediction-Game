import { Image, StyleSheet, Text, View } from "react-native"
import { DarkButtonContainer } from "../components/ButtonContainer";

export default function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  return (
    <View style={styles.rootContainer}>
      <View><Text style={styles.title}>GameOver</Text></View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/images/success.jpg')} />
      </View>
      <View>
        <Text style={styles.summeryText} >
          Your phone needed <Text style={styles.text}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.text}>{userNumber}</Text>.
        </Text>
      </View>
      <View style={{ flexDirection: 'row', marginHorizontal: 50 }}>
        <DarkButtonContainer onPress={onStartNewGame} title={'Start a new game.'} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#EAE2B7',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  title: {
    paddingVertical: 20,
    fontSize: 55,
    fontWeight: '400',
    textAlign: 'center',
    color: '#003049'
  },
  imageContainer: {
    width: '100%',
    // backgroundColor: 'red',
    alignItems: 'center'
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 150,
  },
  summeryText: {
    fontSize: 20,
    fontWeight: '300',
    paddingHorizontal: 33,
    textAlign: 'center'
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#D62828'
  }
});
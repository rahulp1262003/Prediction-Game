import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { LightButtonContainer } from '../components/ButtonContainer';


export default function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setenteredNumber] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  function numberInputhandler(enteredText) {
    setenteredNumber(enteredText);
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      setModalVisible(true); // Show modal when the number is invalid
      return;
    }

    onPickNumber(chosenNumber);
  }

  function resetInputHandler() {
    setenteredNumber('');
  }

  return (
    <View style={styles.container}>
      <View style={styles.wcContainer}>
        <Text style={styles.title}>Welconme to the Game</Text>
        <Text style={styles.bannerTitle}>Guess Number</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.textPlacehilder}>Enter The Number</Text>
        <TextInput
          style={styles.cardTextInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={numberInputhandler}
          value={enteredNumber}
        />

        {/* Buttons */}
        <View style={styles.buttonBox}>
          <LightButtonContainer onPress={resetInputHandler} title={'Reset'}  />
          <LightButtonContainer onPress={confirmInputHandler} title={'Confirm'} />
        </View>
      </View>

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false); // Close the modal when back is pressed
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Number must be between 1 and 99!</Text>
            <View style={styles.buttoMain}>
              <Pressable
                style={styles.button}
                onPress={() => { setModalVisible(false); setenteredNumber('') }}
              >
                <Text style={styles.textStyle}>Close</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <StatusBar translucent={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#EAE2B7',
  },
  wcContainer:{
    marginTop: 90,
  },
  title:{
    fontSize: 20,
    fontWeight: '500',
    color: '#003049',
    textAlign: 'center'
  },
  bannerTitle:{
    fontSize: 40,
    fontWeight: '600',
    color: '#F77F00',
    textAlign: 'center',
    marginTop: 15,
    paddingHorizontal: 20
  },
  textPlacehilder:{
    fontSize: 20,
    fontWeight: '400',
    color: '#FCBF49'
  },
  card: {
    padding: 25,
    marginTop: 40,
    width: '90%',
    // height: 00,
    backgroundColor: '#003049',
    borderRadius: 30,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  cardTextInput: {
    borderBottomColor: '#D62828',
    color: '#D62828',
    fontSize: 50,
    fontWeight: 'bold',
    borderBottomWidth: 2,
    textAlign: 'center',
  },
  buttonBox: {
    marginTop: 20,
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttoMain: {
    marginHorizontal: 20,
    flexDirection: 'row'
  },
  button: {
    // flex:1,
    borderRadius: 20,
    padding: 10,
  },
  textStyle: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    paddingHorizontal: 5,
    paddingBottom: 2
  },
  modalText: {
    fontSize: 15,
    marginBottom: 15,
    textAlign: 'center',
  },
});

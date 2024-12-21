import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

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
      <View style={styles.card}>
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
          <View style={styles.buttonOuterContainer}>
            <Pressable
              style={styles.buttonContainer}
              android_ripple={{ color: '#DD9403' }}
              onPress={resetInputHandler}
            >
              <Text style={styles.buttonText}>Reset</Text>
            </Pressable>
          </View>
          <View style={styles.buttonOuterContainer}>
            <Pressable
              style={styles.buttonContainer}
              android_ripple={{ color: '#DD9403' }}
              onPress={confirmInputHandler}
            >
              <Text style={styles.buttonText}>Confirm</Text>
            </Pressable>
          </View>
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
  card: {
    marginTop: 100,
    width: '95%',
    height: 200,
    backgroundColor: '#003049',
    borderRadius: 30,
    justifyContent: 'center',
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
  buttonOuterContainer: {
    flex: 1,
    borderRadius: 50,
    overflow: 'hidden',
    marginHorizontal: 10,
  },
  buttonContainer: {
    backgroundColor: '#FCBF49',
    borderRadius: 20,
    alignItems: 'center',
    overflow: 'hidden',
  },
  buttonText: {
    paddingVertical: 10,
    color: '#000',
    fontSize: 18,
    textAlign: 'center',
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

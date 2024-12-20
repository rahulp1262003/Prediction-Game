import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View, Alert } from 'react-native';

export default function App() {

  const [enteredNumber, setenteredNumber] = useState('');

  function numberInputhandler(enteredText) {
    setenteredNumber(enteredText);
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid Number',
        'Number has to be a number between 1 to 99',
        [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}]
      );
      return;
    }

    console.log('Valid number...!');
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
      <StatusBar style="auto" />
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
    marginHorizontal: 10
  },
  buttonContainer: {
    // marginHorizontal: 10,
    backgroundColor: '#FCBF49',
    borderRadius: 20,
    alignItems: 'center',
    overflow: 'hidden'
  },
  buttonText: {
    paddingVertical: 10,
    color: '#000',
    fontSize: 18,
    textAlign: 'center',
  },
});

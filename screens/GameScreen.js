import { useState } from "react";
import { View, Text, StyleSheet } from "react-native"
import NumberContainer from "../components/NumberContainer";
import { DarkButtonContainer } from "../components/ButtonContainer";


function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }

}

export default function GameScreen({ userNumber }) {

    const initialGuess = generateRandomBetween(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Opponent's Guess</Text>
            </View>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View style={styles.buttonContain}>
                <DarkButtonContainer title={'-'} />
                <DarkButtonContainer title={'+'} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EAE2B7',
    },
    titleContainer: {
        // flex:1,
        marginTop: 40,
        marginBottom: 20,
        marginHorizontal: 20,
        // backgroundColor: '#003049',
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderRadius: 18
    },
    title: {
        // flex:1,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#003049'
    },
    buttonContain: {
        marginTop: 20,
        marginHorizontal: 20,
        flexDirection: 'row',
    }
});
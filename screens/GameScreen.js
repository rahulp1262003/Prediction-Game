import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native"
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

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({ userNumber, onGameOver }) {

    const initialGuess = generateRandomBetween(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess]);

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver]);

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, []);


    function nextGuessHandler(direction) {

        if (
            (direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'greater' && currentGuess > userNumber)
        ) {
            Alert.alert("Don't lie!", 'You know that is wrong...', [{ text: 'Sorry', style: 'cancel' }])
        }

        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        console.log(minBoundary, maxBoundary);

        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);
        setGuessRounds(prevGuessRounds => [newRndNumber, ...prevGuessRounds]);
    }

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Opponent's Guess</Text>
            </View>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View style={styles.buttonContain}>
                <DarkButtonContainer onPress={nextGuessHandler.bind(this, 'lower')} title={'-'} />
                <DarkButtonContainer onPress={nextGuessHandler.bind(this, 'greater')} title={'+'} />
            </View>
            <View>
                {guessRounds.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)}
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
    },
    logContainer: {

    }
});
import { StyleSheet, Text, View } from 'react-native'

export default function GuessLogItem({roundNumber, guess}) {
  return (
    <View style={styles.listItem}>
        <Text>#{roundNumber}</Text>
        <Text>Opponent's Guess: {guess}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    listItem:{
        borderColor: '#003049',
        borderWidth: 2,
        borderRadius: 40,
        paddingVertical: 15,
        paddingHorizontal: 25,
        marginVertical: 8,
        marginHorizontal: 20,
        backgroundColor: '#FCBF49',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
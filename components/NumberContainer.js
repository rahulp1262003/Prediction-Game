import { StyleSheet, Text, View } from "react-native"

export default function NumberContainer({children}) {
  return (
    <View style={styles.numberContainer}>
        <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    numberContainer:{
        height: 125,
        marginHorizontal: 20,
        paddingHorizontal: 20,
        backgroundColor: '#FCBF49',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    numberText:{
        color: '#D62828',
        fontSize: 60,
        fontWeight: 'bold'
    }
});
// import React from 'react'
import { StyleSheet, View, Pressable, Text } from 'react-native'

export function LightButtonContainer({ title, onPress }) {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={styles.lightbuttonContainer}
                android_ripple={{ color: '#DD9403' }}
                onPress={onPress}
            >
                <Text style={styles.lightbuttonText}>{title}</Text>
            </Pressable>
        </View>
    )
}

export function DarkButtonContainer({ title, onPress }) {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={styles.darkbuttonContainer}
                android_ripple={{ color: '#00507A' }}
                onPress={onPress}
            >
                <Text style={styles.darkbuttonText}>{title}</Text>
            </Pressable>
        </View>
    )
}


const styles = StyleSheet.create({
    buttonOuterContainer: {
        flex: 1,
        borderRadius: 50,
        overflow: 'hidden',
        marginHorizontal: 10,
    },
    lightbuttonContainer: {
        backgroundColor: '#FCBF49',
        borderRadius: 20,
        alignItems: 'center',
        overflow: 'hidden',
    },
    lightbuttonText: {
        paddingVertical: 10,
        color: '#000',
        fontSize: 18,
        textAlign: 'center',
    },
    darkbuttonContainer:{
        backgroundColor: '#003049',
        borderRadius: 20,
        alignItems: 'center',
        overflow: 'hidden',
    },
    darkbuttonText: {
        paddingVertical: 20,
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
    },
});
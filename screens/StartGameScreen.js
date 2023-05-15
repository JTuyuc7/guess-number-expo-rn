import React, { useState } from 'react'
import { Alert, StyleSheet, TextInput, View, Text } from 'react-native'
import PrimaryButton from '../components/ui/PrimaryButton'
import Colors from '../constants/colors'
import Title from '../components/ui/Title'
import Card from '../components/ui/Card'
import InstructionText from '../components/ui/InstructionText'

const StartGame = ({ onPickedNumber }) => {

    const [enteredNumber, setEnteredNumber] = useState('')

    const numberInputHandler = (text) => {
        setEnteredNumber(text)
    }

    const resetInputHandler = () => {
        setEnteredNumber('')
    }

    const confirmInputHandler = () => {
        console.log('confirming xD')
        const chosenNumber = parseInt(enteredNumber)
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid number', 'Please enter a valid number within 1 - 99', [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }])
            return
        }
        onPickedNumber(enteredNumber)
    }

    return (
        <>
            <View
                style={styles.rootContainer}
            >
                <Title text={'Guess My Number'} />
                <Card>
                    <InstructionText title={'Enter a Number'} />
                    <TextInput
                        style={styles.numberInput}
                        maxLength={2}
                        keyboardType='number-pad'
                        autoCapitalize='none'
                        autoCorrect={false}
                        value={enteredNumber}
                        onChangeText={numberInputHandler}
                    />
                    <View
                        style={styles.buttonsContainer}
                    >
                        <View style={styles.buttonContainer}>
                            <PrimaryButton
                                onPress={ resetInputHandler }
                            >Reset</PrimaryButton>
                        </View>

                        <View style={styles.buttonContainer}>
                            <PrimaryButton
                                onPress={confirmInputHandler}
                            >Confirm</PrimaryButton>
                        </View>
                    </View>
                </Card>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center'
    },
    numberInput: {
        height: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        // fontWeight: 'bold',
        width: 50,
        textAlign: 'center',
        fontFamily: 'open-sans-bold'
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    buttonContainer: {
        flex: 1
    }
})

export default StartGame
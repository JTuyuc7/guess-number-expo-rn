import React, { useState } from 'react'
import { Alert, StyleSheet, TextInput, View, Text, Dimensions, useWindowDimensions, KeyboardAvoidingView, ScrollView } from 'react-native'
import PrimaryButton from '../components/ui/PrimaryButton'
import Colors from '../constants/colors'
import Title from '../components/ui/Title'
import Card from '../components/ui/Card'
import InstructionText from '../components/ui/InstructionText'

const StartGame = ({ onPickedNumber }) => {

    const [enteredNumber, setEnteredNumber] = useState('')
    const { height, width } = useWindowDimensions()
    console.log("🚀 ~ file: StartGameScreen.js:13 ~ StartGame ~ width:", width)

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

    const marginTop = height < 340 ? 30 : 70

    return (
        <>
            <ScrollView
                style={styles.screen}
            >
            <KeyboardAvoidingView
                style={styles.screen}
                behavior='position'
            >
            <View
                style={[styles.rootContainer, { marginTop: marginTop} ]}
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
                </KeyboardAvoidingView>
            </ScrollView>
        </>
    )
}

// const deviceHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },  
    rootContainer: {
        flex: 1,
        // marginTop: deviceHeight < 400 ? 30 : 100,
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
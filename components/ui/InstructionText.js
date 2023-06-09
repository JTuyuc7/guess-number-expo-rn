import React from 'react'
import { StyleSheet, Text } from 'react-native'
import Colors from '../../constants/colors'

const InstructionText = ({ title }) => {

    return (
        <Text
            style={styles.instructionText}
        >{title}</Text>
    )
}

export default InstructionText

const styles = StyleSheet.create({
    instructionText: {
        color: Colors.accent500,
        fontSize: 24,
        fontFamily: 'open-sans'
    }
})
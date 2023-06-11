import React from 'react'
import { StyleSheet, Text, Platform } from 'react-native'
import Colors from '../../constants/colors'

const Title = ({ text }) => {

    return (
        <>
            <Text
                style={styles.title}
            >{text}</Text>
        </>
    )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        // fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        //* borderWidth: Platform.OS === 'ios' ? 0 : 2, // This can be one of the possible approach of seeting styles
        //* borderWidth: Platform.select({ ios: 0, android: 2 }), // Styles aplicable only for androind devices
        borderWidth: 2,
        borderColor: Colors.accent500,
        padding: 10,
        borderRadius: 5,
        marginBottom: 5,
        maxWidth: '80%'
    }
})

export default Title
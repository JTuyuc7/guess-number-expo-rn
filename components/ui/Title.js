import React from 'react'
import { StyleSheet, Text } from 'react-native'
import Colors from '../../constants/colors'

const Title = ({text}) => {

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
        borderWidth: 2,
        borderColor: Colors.accent500,
        padding: 10,
        borderRadius: 5,
        marginBottom: 5
    }
})

export default Title
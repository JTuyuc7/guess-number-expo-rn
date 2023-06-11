import React from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native'
import Colors from '../../constants/colors'

const NumberContainer = ({ content }) => {

    return (
        <>
            <View
                style={styles.container}
            >
                <Text
                    style={styles.numberText}
                >{content}</Text>
            </View>
        </>
    )
}

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accent500,
        padding: deviceWidth < 380 ? 12 : 24,
        borderRadius: 8,
        margin: deviceWidth < 380 ? 12 : 24,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberText: {
        color: Colors.accent500,
        fontSize: 36,
        fontWeight: 'bold'
    }
})

export default NumberContainer
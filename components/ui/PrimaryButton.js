import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import Colors from '../../constants/colors'

const PrimaryButton = (props) => {
    const pressHandler = () => {
        props.onPress()
    }
    return (
        <View
            style={styles.buttonOuterContainer}
        > 
            <Pressable
                // style={styles.buttonInnerContainer}
                style={({ pressed }) => pressed ? [styles.buttonOuterContainer, styles.pressed] : styles.buttonInnerContainer}
                onPress={pressHandler}
                android_ripple={{ color: Colors.primary600 }}
                
            >
                    <Text
                        style={styles.buttonText}
                >{props.children}</Text>
            </Pressable>
        </View>
    )
}

export default PrimaryButton

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },
    buttonInnerContainer: {
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontFamily: 'open-sans'
    },
    pressed: {
        opacity: 0.75,
        paddingVertical: 8,
    }
})
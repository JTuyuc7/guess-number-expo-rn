import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import Title from '../components/ui/Title'
import Colors from '../constants/colors'
import PrimaryButton from '../components/ui/PrimaryButton'

const GameOverScreen = ({ roundsNumber = 0, userNumber = 0, onStartNewGame}) => {

    return (
        <>
            <View
                style={styles.rootContainer}
            >
                <Title text={'Game Over'} />

                <View
                    style={styles.imageContainer}
                >
                    <Image
                        source={require('../assets/images/success.png')}
                        // resizeMethod=''
                        style={styles.imageStyle}
                    />

                </View>

                <View>
                    <Text
                        style={styles.summaryText}
                    >Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to gues the <Text style={styles.highlight}>{userNumber}</Text> number.</Text>
                </View>

                <PrimaryButton
                    onPress={onStartNewGame}
                >Start New Game</PrimaryButton>
            </View>
        </>
    )
}

export default GameOverScreen

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        borderRadius: 150,
        width: 300,
        height: 300,
        borderWidth: 3,
        borderColor: Colors.primary900,
        overflow: 'hidden',
        margin: 36
    },
    imageStyle: {
        width: '100%',
        height: '100%'
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24
    },
    highlight: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary500
    }
})
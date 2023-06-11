import React from 'react'
import { Text, View, Image, StyleSheet, Dimensions, useWindowDimensions, ScrollView } from 'react-native'
import Title from '../components/ui/Title'
import Colors from '../constants/colors'
import PrimaryButton from '../components/ui/PrimaryButton'

const GameOverScreen = ({ roundsNumber = 0, userNumber = 0, onStartNewGame }) => {
    
    const { height, width } = useWindowDimensions()

    let imageSize = 300
    
    if (width < 380) {
        imageSize = 150
    }

    if (height < 400) {
        imageSize = 80
    }

    return (
        <>
            <ScrollView
                style={styles.screen}
            >
                <View
                    style={styles.rootContainer}
                >
                    <Title text={'Game Over'} />

                    <View
                        style={[styles.imageContainer, { width: imageSize, height: imageSize, borderRadius: imageSize / 2}]}
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
            </ScrollView>
        </>
    )
}

export default GameOverScreen

// const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        // borderRadius: deviceWidth < 380 ? 75 : 150,
        // width: deviceWidth < 380 ? 150 : 300,
        // height: deviceWidth < 380 ? 150 : 300,
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
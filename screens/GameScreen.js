import React, { useEffect, useState } from 'react'
import { Alert, StyleSheet, Text, View, FlatList } from 'react-native'
import Title from '../components/ui/Title'
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import { Ionicons } from '@expo/vector-icons'
import GuessItemLog from '../components/game/GuessItemLog';


function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundary = 1
let maxBoundary = 100

const StartGameScreen = ({ userNumber, gameOverHandler,  }) => {
    // console.log(userNumber, 'userNumber')
    const initialGuess = generateRandomBetween(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)
    const [ guessRounds, setGuesRounds ] = useState([initialGuess])

    // console.log(currentGuess, 'current guess')
    useEffect(() => {
        console.log(currentGuess, userNumber)
        console.log(typeof currentGuess,  typeof userNumber)
        if (currentGuess === Number(userNumber)) {
            gameOverHandler(guessRounds.length)
        }
    }, [userNumber, currentGuess, gameOverHandler])

    useEffect(() => {
        minBoundary = 1
        maxBoundary = 100

    }, [])

    const nextGuessHandler = (direction) => {
        if (
            (direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'greater' && currentGuess > userNumber)
        ) {
            Alert.alert("Don't lie", 'You know that this is wrong...', [{text: 'Sorry!', style: 'cancel'}])
            return 
        }
        if (direction === 'lower') {
            maxBoundary = currentGuess
        } else {
            minBoundary = currentGuess + 1
        }
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
        setCurrentGuess(newRndNumber)
        setGuesRounds((preRound) => [newRndNumber, ...preRound ])
    }

    const guessRoundsListlength = guessRounds.length

    return (
        <>
            <View
                style={styles.screen}
            >
                <Title text={"Opponent's Guess"} />
                <NumberContainer content={currentGuess} />
                <Card>
                    {/* <Text>Higher or lower?</Text> */}
                    <InstructionText title={'Higher or lower?'} />
                    <View
                        style={styles.buttonsContainer}
                    >
                        <View style={styles.buttonContainer}>
                            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')} >
                                <Ionicons name='md-remove' size={24} color={'white'}/>
                            </PrimaryButton>
                        </View>
                        <View style={styles.buttonContainer}> 
                            <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')} >
                                <Ionicons name='md-add' size={24} color={'white'} />
                            </PrimaryButton>
                        </View>
                    </View>
                </Card>

                <View
                    style={styles.listContainer}
                >
                    {/* {guessRounds.map((guessRond) => <Text key={guessRond}>{guessRond}</Text>)} */}

                    <FlatList
                        data={guessRounds}
                        keyExtractor={ (item) => item}
                        renderItem={(itemData) => {
                            return (
                                <GuessItemLog roundNumber={guessRoundsListlength - itemData.index} guess={itemData.item} />
                            )
                        }}
                    />
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    },
    buttonsContainer: {
        marginVertical: 10,
        flexDirection: 'row',
        marginTop: 20
    },
    buttonContainer: {
        flex: 1
    },
    listContainer: {
        flex: 1,
        padding: 16
    }
})

export default StartGameScreen
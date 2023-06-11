import React from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import Colors from '../../constants/colors'

const Card = ({children}) => {

    return (
        <View
            style={styles.inputContainer}
        >
            {children}
        </View>
    )
}

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    inputContainer: {
        padding: 16,
        marginTop: deviceWidth < 380 ? 18 : 30,
        backgroundColor: Colors.primary800,
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default Card
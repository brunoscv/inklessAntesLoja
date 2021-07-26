import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngry, faMeh, faSmile, faGrinHearts } from '@fortawesome/free-solid-svg-icons';


export default function ServiceEvaluation({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.center}>
                <Image style={styles.attendantAvatar} source={require('../../assets/user.png')} />
            </View>


            <View style={styles.center}>
                <Text style={styles.attendantQuestion}>O que você achou</Text>
                <Text style={styles.attendantQuestion}>do meu atendimento?</Text>
            </View>

            <View style={styles.rowEmojis}>
                <TouchableOpacity style={styles.buttonEmoji}>
                    <FontAwesomeIcon icon={faGrinHearts} size={55} color="#ffffff" />
                    <Text style={styles.textEmojis}>Amei</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonEmoji}>
                    <FontAwesomeIcon icon={faSmile} size={55} color="#ffffff" />
                    <Text style={styles.textEmojis}>Gostei</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonEmoji}>
                    <FontAwesomeIcon icon={faMeh} size={55} color="#ffffff" />
                    <Text style={styles.textEmojis}>Razoável</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonEmoji} onPress={() => navigation.navigate('Menu')}>
                    <FontAwesomeIcon icon={faAngry} size={55} color="#ffffff" />
                    <Text style={styles.textEmojis}>Detestei</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.center}>
                <Text style={styles.textObs}>
                    A avaliação de atendimento é anônima.
                </Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1976d2',
        justifyContent: 'space-evenly',
        //alignItems: 'center'
    },
    center: {
        alignItems: 'center'
    },
    attendantAvatar: {
        width: 150,
        height: 150,
        //resizeMode: 'stretch'
    },
    attendantQuestion: {
        color: '#ffffff',
        fontSize: 25,
        fontWeight: 'bold'
    },
    rowEmojis: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    buttonEmoji: {
        alignItems: 'center'
    },
    textEmojis: {
        color: '#ffffff',
        fontSize: 18
    },
    textObs: {
        color: '#ffffff',
        fontSize: 20
    }
});
import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity  } from 'react-native';
import { FontAwesomeIcon  } from '@fortawesome/react-native-fontawesome';
import { faAngry } from '@fortawesome/free-solid-svg-icons';


export default function ServiceEvaluation({ navigation }){
    return(
        <View style={styles.container}>
            
            <Image style={styles.attendantAvatar} source={require('../../assets/user.png')}/>
            
            <Text>
                O que você achou{'\n'}do meu atendimento?
            </Text>
            
            <View>

            </View>
            
            <Text>
                A avaliação de atendimento é anônima.
            </Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1976d2',
        //alignItems: 'center'
    },
    attendantAvatar:{
        width: 30,
        height: 30,
        //resizeMode: 'stretch'
    }
});
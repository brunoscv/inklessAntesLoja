import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function Reception({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: '#1976d2', padding: 10, borderBottomLeftRadius: 15, borderBottomRightRadius: 15, flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => navigation.navigate('Menu')} style={{ padding: 5 }}>
                    <FontAwesomeIcon icon={faArrowLeft} size={20} color="#fff" />
                </TouchableOpacity>
                <Text style={{ color: '#fff', fontSize: 20, fontWeight: '400' }}>Recepção</Text>
            </View>
            <View style={styles.headerProfile} >
                <Image style={styles.cardAvatar} source={require('../../assets/user.png')} />
                <View>
                    <Text style={styles.nameText}>User</Text>
                    <Text style={styles.nameHospitalProfile}>em Hospital Gastrovita</Text>
                </View>
            </View>

            <View style={styles.content}>
                <View style={styles.firstrow}>
                    <TouchableOpacity onPress={() => navigation.navigate('ServiceTypeConsultation')} style={styles.button}>
                        <Image style={styles.iconSchedule} source={require('../../assets/icon_schedule.png')} />
                        <Text style={styles.buttonText}>Agendar{'\n'}Consulta</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('ServiceTypeExam')} style={styles.button}>
                        <Image style={styles.iconExam} source={require('../../assets/icon_exam.png')} />
                        <Text style={styles.buttonText}>Agendar{'\n'}  Exame</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1976d2',
    },
    headerProfile:{
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    content: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    firstrow: {
        marginTop: 21,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1976d2',

    },
    button: {
        height: 160,
        width: 160,
        backgroundColor: '#29b6f6',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        margin: 5
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    },
    iconSchedule: {
        width: 75,
        height: 85,
        resizeMode: 'stretch'
    },
    iconExam: {
        width: 81,
        height: 97,
        resizeMode: 'stretch'
    },
    cardAvatar: {
        height: 50,
        width: 50,
        backgroundColor: 'gray',
        borderRadius: 50,
    },
    nameText: {
        color: '#fff',
        fontSize: 17,
        paddingVertical: 2,
        paddingHorizontal: 20
    },
    nameHospitalProfile: {
        color: '#fff',
        fontSize: 17,
        paddingHorizontal: 20,
        fontWeight: 'bold'
    }
});
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function SchedulesAndExams({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: '#1976d2', padding: 10, borderBottomLeftRadius: 15, borderBottomRightRadius: 15, flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => navigation.navigate('Menu')} style={{ padding: 5 }}>
                    <FontAwesomeIcon icon={faArrowLeft} size={20} color="#fff" />
                </TouchableOpacity>
                <Text style={{ color: '#fff', fontSize: 20, fontWeight: '400' }}>Recepção</Text>
            </View>

            <View style={styles.content}>
                <View style={styles.firstrow}>
                    <TouchableOpacity onPress={() => navigation.navigate('')} style={styles.button}>
                        <Text style={styles.buttonText}>Agendar Consulta</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('')} style={styles.button}>
                        <Text style={styles.buttonText}>Agendar Exame</Text>
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
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    firstrow: {
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
    cardAvatar: {
        height: 50,
        width: 50,
        backgroundColor: 'gray',
        borderRadius: 50,
    },
    menuText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    nameText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15,
        paddingVertical: 2,
        paddingHorizontal: 20
    },
});
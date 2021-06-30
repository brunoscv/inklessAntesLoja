import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function ExamsScheduling({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={header}>
                <TouchableOpacity onPress={() => navigation.navigate('SchedulesAndExams')} style={{ padding: 5 }}>
                    <FontAwesomeIcon icon={faArrowLeft} size={20} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.nameScreen}>Exames</Text>
            </View>
            <View style={styles.content}>
                <View style={styles.firstrow}>
                    <Text style={styles.labelText}>Nome:</Text>
                    <Text style={styles.labelText}>Nome do paciente</Text>
                </View>
                <View style={styles.secondrow}>
                    <Text style={styles.labelText}>Telefone:</Text>
                    <Text style={styles.labelText}>Telefone do paciente</Text>
                </View>
                <View style={styles.thirdrow}>
                    <Text style={styles.labelText}>Cpf:</Text>
                    <Text style={styles.labelText}>Cpf do paciente</Text>
                </View>
                <View style={styles.fourthrow}>
                    <Text style={styles.labelText}>Data de Nasc.:</Text>
                    <Text style={styles.labelText}>Nasc. do paciente</Text>
                </View>
                <View>
                </View>
                <View></View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1976d2',
    },
    header: { 
        backgroundColor: '#1976d2',
        padding: 10,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        flexDirection: 'row' 
    },
    nameScreen: { 
        color: '#fff', 
        fontSize: 20, 
        fontWeight: '400' 
    },
    content: {
        flex: 1,
        justifyContent: 'flex-start',
        marginHorizontal: 15
    },
    firstrow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    secondrow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    thirdrow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    fourthrow: {
        //flexDirection: 'row',
        justifyContent: 'space-between',
    },
    fifthColumn:{

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
    labelText: {
        color: '#fff',
        fontSize: 23
    },
});
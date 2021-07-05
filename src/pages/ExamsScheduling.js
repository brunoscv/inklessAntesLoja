import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function ExamsScheduling({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
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
                    <Text style={styles.labelText}>Tipo de atendimento:</Text>
                    <View style={styles.fieldPicker}>
                        <Picker style={styles.picker}>
                            <Picker.Item label='Convencional' value='convencional' />
                            <Picker.Item label='Dificuldade de locomoção' value='dificuldade_de_locomocao' />
                            <Picker.Item label='Idoso maior que 60 anos' value='idoso_maior_60_anos' />
                            <Picker.Item label='Gestantes' value='gestantes' />
                            <Picker.Item label='Criança de colos' value='crianca_colo' />
                            <Picker.Item label='Autistas' value='autistas' />
                        </Picker>
                    </View>

                </View>
                <View>
                    <Text style={styles.labelText}>Selecione o convênio:</Text>
                    <View style={styles.fieldPicker}>
                        <Picker style={styles.picker}>
                            <Picker.Item label='Plano econômico' value='plano_economico' />
                        </Picker>
                    </View>
                </View>
                <View>
                    <TouchableOpacity style={styles.examButton} onPress={() => navigation.navigate('ServiceEvaluation')}>
                        <Text style={styles.examText}>Agendar Exame</Text>
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
        justifyContent: 'space-evenly',
        marginHorizontal: 15
    },
    labelText: {
        color: '#fff',
        fontSize: 21
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
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    picker: {
        color: '#ffffff',
    },
    fieldPicker: {
        marginTop: 5,
        borderWidth: 1,
        borderColor: '#ffffff',
        borderRadius: 3
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
    examButton: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        margin: 2,
        padding: 15,
        flexDirection: 'row'
    },
    examText: {
        color: '#1976d2',
        fontSize: 21,
        fontWeight: 'bold'
    },
});
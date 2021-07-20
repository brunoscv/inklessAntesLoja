import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function ServiceTypeConsultation({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: '#1976d2', padding: 10, borderBottomLeftRadius: 15, borderBottomRightRadius: 15, flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => navigation.navigate('ServiceModeConsultation')} style={{ padding: 5 }}>
                    <FontAwesomeIcon icon={faArrowLeft} size={20} color="#fff" />
                </TouchableOpacity>
                <Text style={{ color: '#fff', fontSize: 20, fontWeight: '400' }}>Agendamento de consulta</Text>
            </View>
            <View style={styles.headerProfile} >
                <Image style={styles.cardAvatar} source={require('../../assets/user.png')} />
                <View>
                    <Text style={styles.nameText}>User</Text>
                    <Text style={styles.nameHospitalProfile}>em Hospital Gastrovita</Text>
                </View>
            </View>
            <View style={{ marginHorizontal: 30 }}>
                <Text style={{ fontSize: 20, color: '#fff' }}>Tipo de atendimento:</Text>
            </View>
            <View style={styles.content}>
                <View style={styles.firstrow}>
                    <TouchableOpacity onPress={() => navigation.navigate('HealthPlanConsultation')} style={styles.button}>
                        <Image style={styles.icon} source={require('../../assets/pf0.png')} />
                        <Text style={styles.buttonText}>Convencional</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('HealthPlanConsultation')} style={styles.button}>
                    <Image style={styles.icon} source={require('../../assets/pf1.png')} />
                        <Text style={styles.buttonText}>Dificuldade de{'\n'}   locomoção</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.secondrow}>
                    <TouchableOpacity onPress={() => navigation.navigate('HealthPlanConsultation')} style={styles.button}>
                    <Image style={styles.icon} source={require('../../assets/pf2.png')} />
                        <Text style={styles.buttonText}>Idoso(&gt; 60 anos)</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('HealthPlanConsultation')} style={styles.button}>
                    <Image style={styles.icon} source={require('../../assets/pf3.png')} />
                        <Text style={styles.buttonText}>Gestantes</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.thirdrow}>
                    <TouchableOpacity onPress={() => navigation.navigate('HealthPlanConsultation')} style={styles.button}>
                    <Image style={styles.icon} source={require('../../assets/pf4.png')} />
                        <Text style={styles.buttonText}>Criança de colo</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('HealthPlanConsultation')} style={styles.button}>
                    <Image style={styles.icon} source={require('../../assets/pf5.png')} />
                        <Text style={styles.buttonText}>Autistas</Text>
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
    headerProfile: {
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
        marginTop: 17,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1976d2',
    },
    secondrow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1976d2',
    },
    thirdrow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1976d2'
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
    },
    icon: {
        width: 90,
        height: 90,
        resizeMode: 'stretch'
    },
});
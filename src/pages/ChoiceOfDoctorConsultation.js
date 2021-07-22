import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, FlatList } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function ChoiceOfDoctorConsultation({ navigation }) {

    const data = [
        { name: 'ANA PAULA SANTOS DE ANDRADE MELO', specialty: 'COLOPROCTOLOGISTA', crm: 'CRM-PI 3506', img: require('../../assets/med1.jpeg') },
        { name: 'ANDERSON MARTINS DANTAS', specialty: 'CIRURGIÃO GERAL', crm: 'CRM-PI 2739', img: require('../../assets/med2.jpeg') },
        { name: 'CARLOS DIMAS DE CARVALHO SOUSA', specialty: 'GASTROENTEROLOGISTA', crm: 'CRM-PI 747', img: require('../../assets/med3.jpeg') },
        { name: 'CAROLINE TORRES SAMPAIO', specialty: 'GASTROENTEROLOGISTA', crm: 'CRM-PI 4909', img: require('../../assets/med4.png') },
        { name: 'DANILO DA FONSECA REIS SILVA', specialty: 'ONCOLOGISTA', crm: 'CRM-PI 3799', img: require('../../assets/med5.jpeg') },
        { name: 'ELIO RODRIGUES DA SILVA', specialty: 'CIRURGIÃO GERAL', crm: 'CRM-PI 1977', img: require('../../assets/med6.jpeg') }
    ]

    const card = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('TimesSuggestionConsultation')} style={styles.card}>
            <Image style={styles.imgDoctor} source={item.img} />
            <View style={{ flex: 1, marginHorizontal: 2 }}>
                <Text style={styles.cardText}>{item.name}</Text>
                <Text style={styles.cardText}>{item.specialty}</Text>
                <Text style={styles.cardText}>{item.crm}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: '#1976d2', padding: 10, borderBottomLeftRadius: 15, borderBottomRightRadius: 15, flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => navigation.navigate('HealthPlanConsultation')} style={{ padding: 5 }}>
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
                <Text style={{ fontSize: 20, color: '#fff' }}>Selecione o médico:</Text>
            </View>
            <View style={styles.content}>
                <FlatList
                    data={data}
                    renderItem={card}
                    keyExtractor={item => item.name}
                />
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
        marginHorizontal: 10,
        marginTop: 10
    },
    firstrow: {
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1976d2',

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
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#26b6f6',
        marginVertical: 5,
        marginHorizontal: 20,
        borderRadius: 16,
        height: 105
    },
    imgDoctor: {
        backgroundColor: '#ffffff',
        height: 70,
        width: 70,
        borderRadius: 50,
        //resizeMode: 'cover',
        marginHorizontal: 10
    },
    cardText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    }
});
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, FlatList, Alert } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faCalendarCheck, faConciergeBell } from '@fortawesome/free-solid-svg-icons';

export default function TimesSuggestionConsultation({ navigation }) {

    const data = [
        { day: '28 de julho', hour: 'Quarta-feira, 08:00' },
        { day: '28 de julho', hour: 'Quarta-feira, 08:30' },
        { day: '28 de julho', hour: 'Quarta-feira, 09:00' },
        { day: '29 de julho', hour: 'Quinta-feira, 09:00' },
        { day: '29 de julho', hour: 'Quinta-feira, 09:20' },
        { day: '29 de julho', hour: 'Quinta-feira, 09:40' }
    ]

    function cardTouch() {
        Alert.alert(
            "Hospital Gastrovita",
            "Seu agendamento foi realizado.\nAguarde ser chamado!",
            [
                {
                    text: "Entendido",
                    onPress: () => navigation.navigate('Menu')
                }
            ]
        );
        
    }

    const card = ({ item }) => (
        <TouchableOpacity onPress={() => cardTouch()} style={styles.card}>
            <FontAwesomeIcon icon={faCalendarCheck} size={70} color="#fff" style={{ marginHorizontal: 10 }} />
            <View style={{ flex: 1, marginHorizontal: 2 }}>
                <Text style={styles.cardText}>{item.day}</Text>
                <Text style={styles.cardText}>{item.hour}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: '#1976d2', padding: 10, borderBottomLeftRadius: 15, borderBottomRightRadius: 15, flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => navigation.navigate('ChoiceOfDoctorConsultation')} style={{ padding: 5 }}>
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
                <Text style={{ fontSize: 20, color: '#fff' }}>Sugestão de horários:</Text>
            </View>
            <View style={styles.content}>
                <FlatList
                    data={data}
                    renderItem={card}
                    keyExtractor={item => item.hour}
                />
                <TouchableOpacity onPress={() => cardTouch()} style={styles.btnDecideReception}>
                    <FontAwesomeIcon style={styles.iconCociergebell} icon={faConciergeBell} size={50} color="#fff" />
                    <Text style={styles.cardText}>Decidir na Recepção</Text>
                </TouchableOpacity>
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
    cardText: {
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
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#26b6f6',
        marginVertical: 5,
        marginHorizontal: 20,
        borderRadius: 16,
        height: 105
    },
    cardText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18
    },
    btnDecideReception: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 70,
        margin: 20,
        backgroundColor: '#26b6f6',
        borderRadius: 16
    },
    iconCociergebell: {
        marginHorizontal: 23
    }
});
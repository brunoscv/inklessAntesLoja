import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, FlatList } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function HealthPlanExam({ navigation }) {

    const data = [
        { name: 'AMIL', img: require('../../assets/c1.png') },
        { name: 'APCEF', img: require('../../assets/c2.jpeg') },
        { name: 'ASSEFAZ', img: require('../../assets/c3.jpeg') },
        { name: 'BRADESCO EMPRESARIAL', img: require('../../assets/c4.png') },
        { name: 'BRADESCO INDIVIDUAL', img: require('../../assets/c5.png') },
        { name: 'CAMED', img: require('../../assets/c6.png') },
        { name: 'CAPESAÚDE (GASTROCLINICA)', img: require('../../assets/c7.png') },
        { name: 'CASEMBRAPA', img: require('../../assets/c8.png') },
        { name: 'CASSI (GASTROCLINICA)', img: require('../../assets/c9.png') },
        { name: 'CONAB', img: require('../../assets/c10.jpeg') },
        { name: 'FACHESF (GASTROCLINICA)', img: require('../../assets/c11.jpeg') },
        { name: 'FUSEX', img: require('../../assets/c12.jpeg') },
        { name: 'GEAP', img: require('../../assets/c13.png') },
        { name: 'HAPVIDA', img: require('../../assets/c14.png') },
        { name: 'H INFANTIL LUCIDIO PORTELA', img: require('../../assets/c-not-exist.png') },
        { name: 'IAPEP SAÚDE', img: require('../../assets/c16.jpeg') },
        { name: 'INTERMED (GASTROCLINICA)', img: require('../../assets/c17.png') },
        { name: 'PLANO ECÔNOMICO', img: require('../../assets/c18.png') },
        { name: 'POSTAL SAÚDE', img: require('../../assets/c19.png') },
        { name: 'PRÓ-SOCIAL', img: require('../../assets/c20.jpeg') },
        { name: 'SAÚDE CAIXA', img: require('../../assets/c21.png') },
        { name: 'SEST SENAT', img: require('../../assets/c22.png') },
        { name: 'UNIMED INTERCAMBIO', img: require('../../assets/c24.jpeg') },
        { name: 'UNIMED TERESINA', img: require('../../assets/c24.jpeg') },
        { name: 'UNIMED TOMOGRAFIA', img: require('../../assets/c25.jpeg') }
    ]

    const card = ({ item }) => (
        <TouchableOpacity onPress={() => alert(`Seu agendamento foi realizado.\nAguarde ser chamado!`)} style={styles.card}>
            <Image style={styles.imgHealthPlan} source={item.img} />
            <Text style={styles.cardText}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: '#1976d2', padding: 10, borderBottomLeftRadius: 15, borderBottomRightRadius: 15, flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => navigation.navigate('ServiceTypeExam')} style={{ padding: 5 }}>
                    <FontAwesomeIcon icon={faArrowLeft} size={20} color="#fff" />
                </TouchableOpacity>
                <Text style={{ color: '#fff', fontSize: 20, fontWeight: '400' }}>Agendamento de exame</Text>
            </View>
            <View style={styles.headerProfile} >
                <Image style={styles.cardAvatar} source={require('../../assets/user.png')} />
                <View>
                    <Text style={styles.nameText}>User</Text>
                    <Text style={styles.nameHospitalProfile}>em Hospital Gastrovita</Text>
                </View>
            </View>
            <View style={{ marginHorizontal: 30 }}>
                <Text style={{ fontSize: 20, color: '#fff' }}>Selecione o convênio:</Text>
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
    imgHealthPlan: {
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
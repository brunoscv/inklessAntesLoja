import React, { useEffect, useState } from 'react';

import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import messaging from '@react-native-firebase/messaging';

import api from '../services/api';
import baseURL from './Baseurl';
import axios from 'axios';

export default function Exam({ navigation }) {

    const [notifications, setNotifications] = useState([]);
    const [notParse, setNotParse] = useState([]);

    /** FIREBASE NOTIFICATION NAVIGATOR */
    useEffect(() => {
        requestUserPermission();
        function loadNotifications() {
            messaging().onNotificationOpenedApp(async remoteMessage => {
                console.log('Message:', remoteMessage.data);
                setNotifications(JSON.stringify(remoteMessage.data));
            });
            messaging().onMessage(async remoteMessage => {
                console.log('Message:', remoteMessage.data);
                setNotifications(JSON.stringify(remoteMessage.data));
            });
            messaging().setBackgroundMessageHandler(async remoteMessage => {
                console.log('Message:', remoteMessage.data);
                setNotifications(JSON.stringify(remoteMessage.data));
            });
        }
        loadNotifications();
    }, []);

  requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      getFcmToken()
      console.log('Authorization status:', authStatus);
    }
  }

  getFcmToken = async () => {
    const fcmToken = await messaging().getToken();
    if (fcmToken) {
     console.log(fcmToken);
     console.log("Your Firebase Token is:", fcmToken);
    } else {
     console.log("Failed", "No token received");
    }
  }
  /** FIREBASE NOTIFICATION NAVIGATOR */
    
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" style={styles.statusBar}/>

            <View style={ {backgroundColor: '#004ba0', padding: 10, borderBottomLeftRadius: 15, borderBottomRightRadius: 15, flexDirection: 'row'} }>
                <TouchableOpacity  onPress={() => navigation.navigate('Menu') } style={{padding: 5}}>
                    <FontAwesomeIcon icon={ faArrowLeft } size={20} color="#fff"/>
                </TouchableOpacity>
            
                <View><Text style={{color: '#fff', fontSize: 20, fontWeight: '400'}}>Voltar</Text></View>
            </View>
            <View style={styles.content}>
                <View style={{ paddingVertical: 5}}>
                    <Text style={{fontSize: 22, color: '#fff'}}>Atendimento no Consult??rio</Text>
                </View>
                <View style={{paddingVertical: 5}}>
                    <Image style={{width: 200, height:200, borderRadius: 200 / 2}} source={{uri: baseURL + 'storage/img/152217202009085f57cbd9f3f45.jpeg'}}/>
                </View>
                <View style={{paddingHorizontal: 20}}>
                    <Text style={{fontSize: 16, color: '#fff', paddingVertical: 20}}>Ol??, eu sou o Dr. Carlos Simas de Carvalho Sousa e irei atender voc?? no Consult??rio 2.</Text>
                </View>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#004ba0',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    statusBar: {
        backgroundColor: '#1976d2',
        color: '#fff'
    },
    actionsBlock: {
        backgroundColor: '#1976d2',
    },
    backBlock: {
        backgroundColor: '#1976d2',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    rightBlock: {
        flexDirection: 'row',
    },
    titleBlock: {
        backgroundColor: '#004ba0',
        padding: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15
    },
    nameBlock: {
        color: '#fff',
        fontSize: 16,
    },
    subnameBlock: {
        color: '#fff',
        fontSize: 30,
    },
    cardAvatar: {
        height: 60,
        width: 60,
        backgroundColor: 'gray',
        borderRadius: 60,
    },
    cardBody: {
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: {width:0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 4
    },
    cardFooter: {
        flexDirection: 'row', 
        justifyContent:'center', 
        alignItems: 'center'
    },
    cardLeftSide: {
        paddingHorizontal: 10,
        flex: 1
    },  
    cardHospital: {
        color: '#1976d2',
        fontSize: 18,
        fontWeight: 'bold'
    },
    cardName: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold'
    },
    cardTime: {
        color: '#222',
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 5
    },
    cardAddress: {
        color: 'gray',
        fontSize: 14,
        fontWeight: '500',
        marginTop: 5
    },
    iconMore: {
        position: 'absolute',
        bottom: 3,
        right: 0,
    },
    cardActionButtons: {

    },
    checkinButton: {
        backgroundColor: '#388e3c',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:4,
        margin: 5,
        padding: 5,
        flexDirection: 'row'
    },
    callButton: {
        backgroundColor: '#388e3c',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:4,
        margin: 5,
        padding: 5,
    },
    navButton: {

    },
    buttonText: {
        color:'#fff',
        fontWeight: 'bold',
        fontSize: 16,
        marginHorizontal: 10
    }
});
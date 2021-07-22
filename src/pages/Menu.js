import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, Alert } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faClock, faBookReader, faFile, faFolder, faSignOutAlt, faVideo, faQrcode, faAngleDown, faGripLines } from '@fortawesome/free-solid-svg-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
import { MenuProvider, Menu as MenuHospitais, MenuOptions, MenuOption, MenuTrigger, renderers } from 'react-native-popup-menu';

import api from '../services/api';
import baseURL from './Baseurl';
import axios from 'axios';
import userLogo from '../../assets/user.png';

const Hospitais = [
  { name: 'Hospital Gastrovita', logo: require('../../assets/gt.png') },
  { name: 'Hospital Santa Maria', logo: require('../../assets/sm.png') },
  { name: 'Hospital São Pedro', logo: require('../../assets/sp.png') }
]

export default function Menu({ navigation }) {
  const [scheduling, setScheduling] = useState(0);
  const [userId, setUserId] = useState('');
  const [user, setUser] = useState('');
  
  useEffect(() => {
    async function loadCustomer() {
      const user_id = await AsyncStorage.getItem('@storage_Key');
      const response = await api.get('api/customer/' + user_id, { responseType: 'json' });
      setUser(response.data.data);
      setUserId(user_id);

    }
    loadCustomer();
  }, []);

  /** FIREBASE NOTIFICATION NAVIGATOR */
  useEffect(() => {
    requestUserPermission();
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      //Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage.data));
      setScheduling(JSON.stringify(remoteMessage.data.scheduling_id));
      //console.log(remoteMessage.data.screen);
      if (remoteMessage.data.screen == "Attendance" || remoteMessage.data.screen == "Clinic") {
        //Quando a notificação é para o atendimento em guiche e no consultorio, o aplicativo busca o id do customer para fazer 
        //a impressao das informações na tela do usuário.
        //Qualquer outras funcionalidades utilizam o id do agendamento para alimentar as rotas
        Alert.alert(
          remoteMessage.data.title,
          remoteMessage.data.body,
          [
            { text: 'CONFIRMAR', onPress: () => navigation.navigate(remoteMessage.data.screen, { scheduling_id: userId }) },
          ],
          { cancelable: false },
        );
        console.log(remoteMessage.data.screen);
      } else {
        if (remoteMessage.data.scheduling_id) {
          Alert.alert(
            remoteMessage.data.title,
            remoteMessage.data.body,
            [
              { text: 'CONFIRMAR', onPress: () => navigation.navigate(remoteMessage.data.screen, { scheduling_id: remoteMessage.data.scheduling_id }) },
            ],
            { cancelable: false },
          );
          //console.log(remoteMessage.data.scheduling_id);
        }
        if (!remoteMessage.data.scheduling_id && remoteMessage.data.scheduling_id == null) {
          Alert.alert(
            remoteMessage.data.title,
            remoteMessage.data.body,
            [
              { text: 'CONFIRMAR', onPress: () => navigation.navigate(remoteMessage.data.screen) },
            ],
            { cancelable: false },
          );
          //console.log(remoteMessage.data.scheduling_id);
        }
      }
    });
    messaging().onNotificationOpenedApp(async remoteMessage => {
      setScheduling(JSON.stringify(remoteMessage.data.scheduling_id));
      if (remoteMessage.data.scheduling_id) {
        navigation.navigate(remoteMessage.data.screen, { scheduling_id: remoteMessage.data.scheduling_id })
      }
      if (!remoteMessage.data.scheduling_id && remoteMessage.data.scheduling_id == null) {
        navigation.navigate(remoteMessage.data.screen)
      }
      console.log(remoteMessage.data.scheduling_id);
    });
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      setScheduling(JSON.stringify(remoteMessage.data.scheduling_id));
      if (remoteMessage.data.scheduling_id) {
        navigation.navigate(remoteMessage.data.screen, { scheduling_id: remoteMessage.data.scheduling_id })
      }
      if (!remoteMessage.data.scheduling_id && remoteMessage.data.scheduling_id == null) {
        navigation.navigate(remoteMessage.data.screen)
      }
      console.log(remoteMessage.data.scheduling_id);
    });
    return unsubscribe;
  }, []);

  requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      getFcmToken()
      getMyStringValue()
      console.log('Authorization status:', authStatus);
    }
  }

  getFcmToken = async () => {
    const fcmToken = await messaging().getToken();
    if (fcmToken) {
      //  console.log(fcmToken);
      console.log("Your Firebase Token is:", fcmToken);
    } else {
      console.log("Failed", "No token received");
    }
  }

  getMyStringValue = async () => {
    try {
      const logged = await AsyncStorage.getItem('@storage_Key');
      if (logged == null || logged == "" || !logged) {
        navigation.navigate('Login');
      }
    } catch (e) { }
  }

  async function removeValue() {
    try {
      await AsyncStorage.removeItem('@storage_Key');
      navigation.navigate('Login');
    } catch (e) { }
  }

  /** FIREBASE NOTIFICATION NAVIGATOR */

  return (
    <MenuProvider>
      <View style={styles.container}>
        <View>
          <View>
            <MenuHospitais renderer={renderers.SlideInMenu} >
              <MenuTrigger>
                <View style={styles.menuHospitais}>
                  <Text style={styles.menuText}>Hospital Gastrovita</Text>
                  <FontAwesomeIcon icon={faAngleDown} size={20} color="#fff" />
                </View>
              </MenuTrigger>
              <MenuOptions style={styles.menuTransparent}>
                <View style={styles.menuOptionsHead}>
                  <FontAwesomeIcon icon={faGripLines} size={30} color="#808080" />
                </View>
                {Hospitais.map(hospital => (
                  <MenuOption key={hospital.name} style={styles.containerMenuOptions}>
                    <View style={styles.cardMenuOption}>
                      <Image style={styles.logoHospitalMenuOptions} source={hospital.logo} />
                      <Text style={styles.nameMenuOptions}>
                        {hospital.name}
                      </Text>
                    </View>
                  </MenuOption>)
                )}
              </MenuOptions>
            </MenuHospitais>
          </View>
          <View style={styles.headerProfile}>
            {!user.image ?
              <Image style={styles.cardAvatar} source={require('../../assets/user.png')} />
              :
              <Image style={styles.cardAvatar} source={{ uri: baseURL + 'storage/' + user.image }} />
            }
            <Text style={styles.nameText}>Bem vindo(a), {user.name}</Text>
            {/*<Text style={styles.nameText}></Text>*/}
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.firstrow}>
            <TouchableOpacity onPress={() => navigation.navigate('Reception')} style={styles.button}>
              <FontAwesomeIcon icon={faQrcode} size={80} color="#fff" />
              <Text style={styles.buttonText}>Recepção</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Scheduling')} style={styles.button}>
              <FontAwesomeIcon icon={faClock} size={80} color="#fff" />
              <Text style={styles.buttonText}>Check-In</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.secondrow}>
            <TouchableOpacity onPress={() => navigation.navigate('Report')} style={styles.button}>
              <FontAwesomeIcon icon={faFile} size={80} color="#fff" />
              <Text style={styles.buttonText}>Laudos</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Document')} style={styles.button}>
              <FontAwesomeIcon icon={faFolder} size={80} color="#fff" />
              <Text style={styles.buttonText}>Documentos</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.thirdrow}>
            <TouchableOpacity onPress={() => navigation.navigate('Historic')} style={styles.button}>
              <FontAwesomeIcon icon={faBookReader} size={80} color="#fff" />
              <Text style={styles.buttonText}>Agendamentos</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-end', paddingHorizontal: 20 }}>
            <Text style={styles.exitText}>Sair</Text>
            <View style={{ paddingVertical: 12, paddingHorizontal: 5 }}>
              <TouchableOpacity onPress={() => removeValue()}>
                <FontAwesomeIcon icon={faSignOutAlt} size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </MenuProvider>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstrow: {
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
  menuTransparent: {
    backgroundColor: '#1976d2',
  },
  menuOptionsHead: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderTopEndRadius: 25,
    borderTopStartRadius: 25
  },
  menuText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  menuHospitais: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 20
  },
  containerMenuOptions: {
    backgroundColor: '#ffffff'
  },
  cardMenuOption: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  nameMenuOptions: {
    fontSize: 20,
    marginLeft: 20
  },
  logoHospitalMenuOptions: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginLeft: 5,
    resizeMode: 'contain'
  },
  nameText: {
    color: '#fff',
    fontSize: 17,
    paddingVertical: 2,
    paddingHorizontal: 20
  },
  exitText: {
    color: '#fff',
    fontSize: 18,
    paddingHorizontal: 5,
    paddingVertical: 10
  },
});
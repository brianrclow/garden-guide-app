import React, { useContext, useEffect, useState, Button } from 'react'
import { Text, SafeAreaView } from 'react-native'
import * as Linking from 'expo-linking';
import styles from './styles';
import Header from '../../components/header/header';
import ChangeScreen from '../../components/changeScreen/changeScreen';
import { UserContext } from '../../providers/UserProvider'

/**
 * Screen to display settings to user. Includes the about, appearance, and account screens.
 * @param {*} props 
 */
export default function SettingsScreen(props) {

    const [entityText, setEntityText] = useState('')
    const [entities, setEntities] = useState([])
    const user = useContext(UserContext);

    const linkTOS = () => {
        Linking.openURL('https://gardenguide-cs481.herokuapp.com/termsofservice.html');
    };

    const linkPrivacy = () => {
        Linking.openURL('https://gardenguide-cs481.herokuapp.com/privacypolicy.html');
    };

    const renderEntity = (item) => {
        return (
            <ChangeScreen screenName={item.item.name}/>
        )
    }

    return (
        <SafeAreaView style={styles.container} >
            <Header title="Settings"/>
            <Text style={{marginTop: 10}}></Text>
            <ChangeScreen screenName="Account" navigator={props.navigation}/>
            {/* <ChangeScreen screenName="Appearance" navigator={props.navigation}/> */}
            <ChangeScreen screenName="About" navigator={props.navigation}/>
            {/* <ChangeScreen screenName="Feedback" navigator={props.navigation}/> */}
            <Text style={styles.linkText} onPress={linkTOS}>Terms of Service</Text>
            <Text style={styles.linkText} onPress={linkPrivacy}>Privacy Policy</Text>
        </SafeAreaView>
    )
}
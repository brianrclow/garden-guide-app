import React, { useContext, useEffect, useState } from 'react'
import { Text, SafeAreaView, View } from 'react-native'
import styles from './styles';
import { UserContext } from '../../providers/UserProvider'
import LogoutButton from '../../components/logoutButton/logoutButton'

/**
 * Screen that displays user's account info and allows them to logout
 * @param {*} props 
 */
export default function AccountScreen(props) {

    const [entityText, setEntityText] = useState('')
    const [entities, setEntities] = useState([])
    const user = useContext(UserContext);


    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.confirmText}>You are signed in as</Text>
            <Text style={styles.confirmText}>username: {user.name}</Text>
            <Text style={styles.confirmText}>email: {user.email}</Text>
            <View style={{width: "100%"}}><LogoutButton style={{width: "100%"}}/></View>
            
        </SafeAreaView>
    )
}
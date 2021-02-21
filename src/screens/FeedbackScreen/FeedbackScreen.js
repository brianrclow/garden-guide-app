import React, { useContext, useEffect, useState } from 'react'
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native'
import styles from './styles';
import { UserContext } from '../../providers/UserProvider'


export default function AccountScreen(props) {

    const [entityText, setEntityText] = useState('')
    const [entities, setEntities] = useState([])
    const user = useContext(UserContext);


    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.titleText}>This is the feedback screen.</Text>
        </SafeAreaView>
    )
}
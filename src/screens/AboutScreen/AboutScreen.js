import React, { useContext, useEffect, useState } from 'react'
import { Text, SafeAreaView } from 'react-native'
import styles from './styles';
import { UserContext } from '../../providers/UserProvider'

/**
 * Screen that displays info about the application
 * @param {} props 
 */
export default function AccountScreen(props) {

    const [entityText, setEntityText] = useState('')
    const [entities, setEntities] = useState([])
    const user = useContext(UserContext);


    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.titleText}>Why this app?</Text>
            <Text style={styles.paragraphText}>Our app is a great mobile gardening companion 
            with planting, growing and harvesting information on various plants. We are constantly 
            working to add more plants to the catalog.</Text>
        </SafeAreaView>
    )
}
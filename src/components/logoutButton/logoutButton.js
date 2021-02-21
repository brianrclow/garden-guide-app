import React, { useState } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import {firebase} from '../../firebase/config'
import { COLORS, STYLES } from '../../constants'

const LogoutButton = ({navigation}) => {
    const logoutUser = () => {
        firebase.auth().signOut();
    }
    return (
        <TouchableOpacity
            style={[STYLES.button, {wdith: "100%"}]}
            onPress={logoutUser}
        ><Text style={STYLES.buttonTitle}>Logout</Text></TouchableOpacity>
    )
}

export default LogoutButton;
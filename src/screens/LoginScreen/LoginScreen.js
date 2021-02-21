import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, SafeAreaView, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { COLORS } from '../../constants';
import { loginWithEmail } from '../../services/userService/userService';
import styles from './styles';
import { Ionicons } from '@expo/vector-icons';
import { STYLES } from '../../constants'

/**
 * Login screen that allows the user to log into their account
 * 
 * @param {} param0 
 */
export default function LoginScreen({navigation}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onFooterLinkPress = () => {
        navigation.navigate('Register')
    }

    const onLoginPress = () => {
        const user = loginWithEmail(email, password);
        if(user) navigation.navigate('GardenScreen', {user});
    }

    return (
        <SafeAreaView style={STYLES.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: "100%"}}
                // contentContainerStyle={{alignItems:"center", flexDirection:}}
                keyboardShouldPersistTaps="always">
                {/* <Ionicons name='ios-leaf' size="100px" color={COLORS.logoDarkGreen} />
                <Ionicons name='ios-leaf' size="100px" color={COLORS.primaryGreen} />
                <Ionicons name='ios-leaf' size="100px" color={COLORS.lightGreen} /> */}
                <View style={{justifyContent: "center", alignItems: "center"}}>
                    <Ionicons name='ios-leaf' size={100} color={COLORS.halfGreen} />
                    <Text style={{color: COLORS.darkGreen, fontSize: 28}}>My Garden Buddy</Text>
                </View>
                {/* <Ionicons name='ios-leaf' size="100px" color={COLORS.darkGreen} /> */}
                
                <TextInput
                    style={styles.input}
                    placeholder='E-mail'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Password'
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TouchableOpacity
                    style={styles.button}
                    color={COLORS.primaryGreen}
                    onPress={() => onLoginPress()}>
                    <Text style={styles.buttonTitle}>Log in</Text>
                </TouchableOpacity>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Don't have an account? Sign up now! <Text onPress={onFooterLinkPress} style={styles.footerLink}>Sign up</Text></Text>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

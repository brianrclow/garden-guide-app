import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, SafeAreaView, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {createAccount, generateUserDoc} from '../../services/userService/userService';
import styles from './styles';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, STYLES } from '../../constants';

/**
 * Registration screen that allows users to create a new account
 * 
 * @param {*} param0 
 */
export default function RegistrationScreen({navigation}) {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const onFooterLinkPress = () => {
        navigation.navigate('Login');
    }

    const onRegisterPress = async () => {
        if (password !== confirmPassword) {
            alert("Passwords don't match.");
            return;
        }
        try {
            const user = await createAccount(email, password, fullName);
            if(user) {
                navigation.navigate('CatlogScreen', {user});
            }
        } catch (e) {
            alert(e);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: "100%" }}
                keyboardShouldPersistTaps="always">
                {/* <Ionicons name='ios-leaf' size="100px" color={COLORS.logoDarkGreen} />
                <Ionicons name='ios-leaf' size="100px" color={COLORS.primaryGreen} />
                <Ionicons name='ios-leaf' size="100px" color={COLORS.lightGreen} /> */}
                <View style={{justifyContent: "center", alignItems: "center"}}>
                    <Ionicons name="ios-leaf" size={100} color={COLORS.halfGreen} />
                    <Text style={{color: COLORS.darkGreen, fontSize: 28}}>My Garden Buddy</Text>
                </View>
                
                {/* <Ionicons name='ios-leaf' size="100px" color={COLORS.darkGreen} /> */}
                
                <TextInput
                    style={styles.input}
                    placeholder='Full Name'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setFullName(text)}
                    value={fullName}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
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
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Confirm Password'
                    onChangeText={(text) => setConfirmPassword(text)}
                    value={confirmPassword}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onRegisterPress()}>
                    <Text style={styles.buttonTitle}>Create account</Text>
                </TouchableOpacity>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Already got an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Log in</Text></Text>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}
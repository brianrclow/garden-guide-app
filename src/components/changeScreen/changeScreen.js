import React, { useContext, useEffect, useState } from 'react'
import { Text, TouchableOpacity, View, Button } from 'react-native'
import styles from './styles';

function properCase(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

export default function ChangeScreen(props) {
    var nameOfScreen = props.screenName;
const toScreen = () => {
    props.navigator.navigate(nameOfScreen, props);
}
    return (
        <TouchableOpacity style={styles.box} onPress={toScreen}>
            <View>
                <Text style={styles.title}>{props.screenName}</Text>
            </View>
        </TouchableOpacity>
    );
}
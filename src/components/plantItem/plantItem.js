import React, { useContext, useEffect, useState } from 'react'
import { Text, TouchableOpacity, View, Button } from 'react-native'
import styles from './styles';
import { COLORS, STYLES } from '../../constants';
import { SproutScale } from '../sproutScale/sproutScale';

function properCase(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

/**
 * A small display for an individual plant item that is used in the Garden Screen
 * @param {*} props 
 */
export function PersonalPlantItem(props) {
    const toScreen = () => {
        props.navigator.navigate("plantScreen", props);
    }
        return (
            <TouchableOpacity style={[styles.box, {borderLeftColor: COLORS[props.plant.category], borderLeftWidth: 4}]} onPress={toScreen}>
                <View style={{width: "50%"}}>
                    <Text style={STYLES.plantTitle}>{props.name}</Text>
                </View>
                <View style={{width: "50%"}}>
                </View>
            </TouchableOpacity>
        );
    }


export default function PlantItem(props) {
const toScreen = () => {
    props.navigator.navigate("plantScreen", props);
}
    return (
        <TouchableOpacity style={[styles.box, {borderLeftColor: COLORS[props.type], borderLeftWidth: 4}]} onPress={toScreen}>
            <View style={{width: "50%"}}>
                <Text style={STYLES.plantTitle}>{props.name}</Text>
                <Text style={{color: COLORS[props.type], fontSize: 16}}>{properCase(props.type)}</Text>
            </View>
            <View style={{width: "50%"}}>
                <Text style={{fontSize: 16}}>{properCase(props.plant.growing_season)} plant</Text>
                <Text style={{fontSize: 16}}>Difficulty: <SproutScale scale={props.plant.difficulty} /></Text>
            </View>
        </TouchableOpacity>
    );
}
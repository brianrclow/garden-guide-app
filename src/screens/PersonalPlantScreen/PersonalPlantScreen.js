import React, { useState } from 'react'
import { Alert, Text, TouchableOpacity, SafeAreaView, View } from 'react-native'
import { COLORS } from '../../constants';
import { Button } from 'react-native'
import { STYLES } from '../../constants'
import { setLastWatered, deletePersonalPlant } from '../../services/personalPlantService/personalPlantService';
import  ConfirmDialog from '../../components/confirmDialog/confirmDialog.js';

/**
 * A screen for personal plants in a user's garden.
 * Displays information about the plant including last watered, date planted
 * and allows the user to delete the personal plant
 * 
 * @param {} props 
 */
export default function PersonalPlantScreen(props) {

    let plant = props.route.params;
    const [ confirmOpen, setConfirmOpen] = useState(false);
   
    /**
     * Deletes a personal plant and renavigates user to the garden screen
     * @param {*} plant 
     */
    const deletePlant = (plant) => {

        deletePersonalPlant(plant.uid);
        plant.resetFunction();
        props.navigation.navigate('gardenScreen', {})
   }

    return (
        <SafeAreaView style={STYLES.container}>
            <View>
                <Text style={STYLES.plantTile}>{plant.name}</Text>
            </View>
            <View>
            <Text style={{fontSize: 16}}>Date Planted: {plant.date_planted}</Text>
            <Text style={{fontSize: 16}}>Last Watered: {plant.last_watered}</Text>
                <Text style={{fontSize: 16}}>Last Fertilized: {plant.last_fertilized}</Text>
                <Text style={{color: COLORS[plant.type], fontSize: 16}}>Last Sprayed: {plant.last_sprayed}</Text>
            </View>
            <View style={{padding: 20, width: "100%"}}>
                {/* <WaterButton/> */}
            </View>
            <View style={{padding: 20, width: "100%"}}>
                <TouchableOpacity
                    style={STYLES.button}
                    onPress={() => setConfirmOpen(true)}
               ><Text style={STYLES.buttonTitle}>Delete Personal Plant</Text></TouchableOpacity>
                <ConfirmDialog
                    title="Delete Plant?"
                    open={confirmOpen}
                    setOpen={setConfirmOpen}
                    onConfirm={() => deletePlant(plant)}>
                        Are you sure you want to delete this plant?
                </ConfirmDialog>
            </View>
        </SafeAreaView>
    )
}

/**
 * A Water button that allows users to set when the plant was last watered.
 * @param {*} plant 
 */
const WaterButton = (plant) => {
    const setWatered = (plant) => {
 /*       if(plant) {
            let today = new Date();
            let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            setLastWatered(plant.uid, date);
            console.log("Button clicked!")
        } TODO for some reason automatically clicks, need to figure out why
        */
    }
    return (
        <TouchableOpacity
            style={STYLES.button}
            onPress={setWatered}
        ><Text style={STYLES.buttonTitle}>Set Last Watered</Text></TouchableOpacity>
    )
}

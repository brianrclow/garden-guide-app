import React, { useContext, useState } from 'react'
import { Text, TouchableOpacity, SafeAreaView, View } from 'react-native'
import { COLORS } from '../../constants';
import { STYLES } from '../../constants'
import { UserContext } from '../../providers/UserProvider'
import Header from '../../components/header/header';
import { SproutScale } from '../../components/sproutScale/sproutScale';
import { createNewPersonalPlant } from '../../services/personalPlantService/personalPlantService';
import { resetState } from '../GardenScreen/GardenScreen';

/**
 * A screen that display information about a plant including name, description, difficulty etc.
 * @param {*} props 
 */
export default function PlantScreen(props) {
    function properCase(text) {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }
    
    /**
     * Allows a user to add a plant to their garden
     */
    function addToGarden() { 
        if(!user) {
            props.navigation.navigate('Login')
        } else {
            createNewPersonalPlant(user, plant.id, plant.name)
            resetState(); // updates the users personal plants so the new plant will be displayed
            alert("Added!");
        }
    }

    const user = useContext(UserContext);
    const plant = props.route.params.plant;
	
    return (
        <SafeAreaView style={STYLES.container}>
                <Header title={plant.name}></Header>
                <View style={{width: "100%", paddingLeft: 20, paddingRight: 20, paddingTop: 20}}>
                    <View style={{width: "100%", flexDirection: "column"}}>
                        <View style={{flexDirection: "row", marginBottom: 20}}>
                            <Text style={{width: "50%", fontSize: 16}}>Type: {properCase(plant.category)}</Text>
                            <Text style={{width: "50%", fontSize: 16}}>Difficulty: <SproutScale scale={plant.difficulty} /></Text>
                        </View>
                        <View style={{flexDirection: "row", marginBottom: 20}}>
                            <Text style={{width: "50%",fontSize: 16}}>{properCase(plant.growing_season)} plant</Text>
                            <Text style={{width: "50%",fontSize: 16}}>Spacing {plant.spacing}</Text>
                        </View>
                    </View>

                    <Text>{plant.description}</Text>
					
					<View style={{marginTop: 20}}>
					<TouchableOpacity
                        style={STYLES.button}
						color={COLORS.primaryGreen}
						onPress={() => addToGarden()}
					><Text style={STYLES.buttonTitle}>Add to My Garden</Text></TouchableOpacity>
					</View>
                </View>
            {/* <Text>Plant screen</Text> */}
        </SafeAreaView>
    )
}

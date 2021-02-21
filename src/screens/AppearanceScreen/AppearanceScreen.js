import React, { useContext, useEffect, useState } from 'react'
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native'
import styles from './styles';
import { UserContext } from '../../providers/UserProvider'
import { fetchSettings, updateDarkMode, updateFertilizer, updateHarvest, updateWatering } from '../../services/settingService/settingService';

export default function AppearanceScreen(props) {

    const [entityText, setEntityText] = useState('')
    const [entities, setEntities] = useState([])
    const user = useContext(UserContext);

	const [settings, setSettings] = useState([]); 
	
	// Functions for each button
	const onDarkModePress = () => updateDarkMode(user.uid, settingsHelper);
	
	const onFertilizerPress = () => updateFertilizer(user.uid, settingsHelper);

	const onHarvestPress = () => updateHarvest(user.uid, settingsHelper);
	
	const onWateringPress = () => updateWatering(user.uid, settingsHelper);
	
	function settingsHelper(s) {
		console.log(s);
		setSettings(s);
	}
	
	useEffect(() => {
		fetchSettings(user.uid, settingsHelper);
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.titleText}>This is the appearance screen.</Text>
			{/* <Text>Dark Mode: <TouchableOpacity style={styles.button} onPress={onDarkModePress}>
					<Text>{settings.dark_mode}</Text>
				</TouchableOpacity>
			</Text>
				
			<Text style={styles.titleText}>Notifications</Text>
				<Text>Fertilizer: <TouchableOpacity style={styles.button} onPress={onFertilizerPress}>
						<Text>{settings.fertilizer}</Text>
					</TouchableOpacity>
				</Text>

				<Text>Harvest: <TouchableOpacity style={styles.button} onPress={onHarvestPress}>
						<Text>{settings.harvest}</Text>
					</TouchableOpacity>
				</Text>
				
				<Text>Watering: <TouchableOpacity style={styles.button} onPress={onWateringPress}>
						<Text>{settings.watering}</Text>
					</TouchableOpacity>
			</Text> */}
        </SafeAreaView>
    )
}

import { useLinkProps } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react'
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView, RefreshControl, View } from 'react-native'
import Header from '../../components/header/header';
import { PersonalPlantItem} from '../../components/plantItem/plantItem';
import { STYLES } from '../../constants';
import { UserContext } from '../../providers/UserProvider'
import { getPlants } from '../../services/itemService/itemService';
import { getPersonalPlants } from '../../services/personalPlantService/personalPlantService';

export function resetState() {} // major hack to refresh personal plants when a user adds the plant. sad programmer face -> :-(

/**
 * Screen to display all of the personal plant a user has
 * @param {*} props 
 */
export default function GardenScreen(props) {
    const [entities, setEntities] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        resetState();
      }, []);

    const addItems = items => {
        setRefreshing(true);
        setEntities(items);
        setRefreshing(false);
    }

    const user = useContext(UserContext);

    /**
    * Used to reset the current personal plants after a delete is made so that  
    * the user does not see deleted plants. 
    */
    resetState = function() {
        setEntities([]);
        getPersonalPlants((res) => {getPlants(res, addItems)}, user);
    }


    // Returns a new personal plant item with the following attributes
    const renderEntity = (item) => {
        // console.log(item);
        const plant = item.item.plant;
        return (
            <PersonalPlantItem
                uid = {item.item.uid.toString()}
                plant_id = {plant.plant_id}
                last_watered = {item.item.last_watered}
                last_sprayed = {item.item.last_sprayed}
                last_fertilized = {item.item.last_fertilized}
                date_planted = {item.item.date_planted}
                name = {plant.name}
                navigator = {props.navigation}
                resetFunction = {resetState}
                plant = {plant}
            />
        )
    }

    useEffect(() => {
        getPersonalPlants((res) => {getPlants(res, addItems)}, user);
    }, []);

    return (
        <SafeAreaView style={STYLES.container}>
            <Header title="My Garden" />
            <ScrollView
                style={{width: "100%"}}
                refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            >
            <FlatList
                data={entities}
                renderItem={renderEntity}
                keyExtractor={(item) => item.uid.toString()}
                removeClippedSubviews={true}
                style={{width: "100%", paddingTop: 20, flex: 1}}
                ListEmptyComponent={<Text style={STYLES.noPlantsText}>You currently have no plants. Go to Catalog and click on plants to get started!</Text>}
            />
            </ScrollView>
        </SafeAreaView>
    )
}
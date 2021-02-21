import React, { useContext, useEffect, useState } from 'react'
import { FlatList, SafeAreaView } from 'react-native'
import Header from '../../components/header/header';
import PlantItem from '../../components/plantItem/plantItem';
import { STYLES } from '../../constants';
import { UserContext } from '../../providers/UserProvider'
import { testItems } from '../../services/itemService/itemService';

/**
 * Displays all of the plants in the database
 * @param {} props 
 */
export default function CatalogScreen(props) {
    const [entities, setEntities] = useState([]);
    const sampleFunction = items => {
        setEntities(items);
    }
    const user = useContext(UserContext);

    const renderEntity = (item) => {
        return (
            <PlantItem
                plant = {item.item}
                name = {item.item.name}
                type = {item.item.category}
                navigator = {props.navigation}
            />
        )
    }

    useEffect(() => {
        testItems(sampleFunction);
    }, []);

    return (
        <SafeAreaView style={STYLES.container}>
            <Header title="Plant Catalog" />
            {/* <View style={{justifyContent: "center", alignItems: "center", width: "90%", overflow: "scroll"}}> */}
            <FlatList
                data={entities}
                renderItem={renderEntity}
                keyExtractor={(item) => item.id.toString()}
                removeClippedSubviews={true}
                style={{width: "100%", paddingTop: 20, flex: 1}}
            />
            {/* </View> */}
        </SafeAreaView>
    )
}
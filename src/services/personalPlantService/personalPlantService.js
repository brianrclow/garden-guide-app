import { firebase } from '../../firebase/config'

/**
 * Personal plant object
 * @param {} plant_id 
 * @param {*} user_id 
 * @param {*} last_watered 
 * @param {*} last_sprayed 
 * @param {*} last_fertilized 
 * @param {*} date_planted 
 */
function PersonalPlant(plant_id, user_id, last_watered, last_sprayed, last_fertilized, date_planted) {
    this.plant_id = plant_id;
    this.user_id = user_id;
    this.last_watered = last_watered;
    this.last_sprayed = last_sprayed;
    this.last_fertilized = last_fertilized;
    this.date_planted = date_planted;
}

/**
 * Updates the given personal plant's last_watered to new value
 * @param {} plant_id 
 * @param {*} new_last_watered 
 */
export const setLastWatered = (plant_id, new_last_watered) => {
    const plantRef = firebase.database().ref(`personal_plant/${plant_id}`);
    plantRef.update({
        "last_watered" : new_last_watered
    }).then(
        console.log("Successfully updated last watered")
    ).catch(
        console.log("Error updating last watered")
    );
}

/**
 * Updates the given personal plant's plant date to new  value
 * @param {} plant_id 
 * @param {*} new_date_planted 
 */
export const setDatePlanted = (plant_id, new_date_planted) => {
    const plantRef = firebase.database().ref(`personal_plant/${plant_id}`);
    plantRef.update({
        "date_planted" : new_date_planted
    }).then(
        console.log("Successfully updated date planted")
    ).catch(
        console.log("Error updating date planted for plant")
    );
}

/**
 * Updates the given personal plant's last sprayed date to new  value
 * @param {} plant_id 
 * @param {*} last_sprayed 
 */
export const setLastSprayed = (plant_id, new_last_sprayed) => {
    const plantRef = firebase.database().ref(`personal_plant/${plant_id}`);
    plantRef.update({
        "last_sprayed" : new_last_sprayed
    }).then(
        console.log("Successfully updated last sprayed for plant")
    ).catch(
        console.log("Error updating last sprayed for plant")
    );
}

/**
 * Updates the given personal plant's last fertilized date to new  value
 * @param {} plant_id 
 * @param {*} last_sprayed 
 */
export const setLastFertilized = (plant_id, new_last_fertilized) => {
    const plantRef = firebase.database().ref(`personal_plant/${plant_id}`);
    plantRef.update({
        "last_fertilized" : new_last_fertilized
    }).then(
        console.log("Successfully updated last fertilized for plant")
    ).catch(
        console.log("Error updating last fertilized for plant")
    );
}

/**
 * Returns all the personal plants that belong to the particular user
 * @param {*} callback 
 * @param {*} user 
 */
export const getPersonalPlants = async (callback, user) => {
    let personal_plants = [];
    const userID = user.uid
    const personalPlantRef = firebase.database().ref('personal_plant').orderByChild("user_id").equalTo(userID);
    const snapshots = await personalPlantRef.once('value').then(res => {
        const objs = res.val();
        if(objs) {
            Object.keys(objs).map( (key,index)=>{       
                objs[key].uid = key;
                personal_plants.push(objs[key]);
            });
            callback(personal_plants);
        }
    });
}

/**
 * Creates a new personal plant, note by default only the plant_id
 * and user_id are filled and the other fields are left out.
 * @param {*} user current user
 * @param {*} plant_id the type of plant that the personal plant is
 */
export const createNewPersonalPlant = (user, plant_id, plant_name) => {
    const personalPlantRef = firebase.database().ref('personal_plant');
    const userID = user.uid
    const newPlant = {
        plant_id: plant_id,
		name: plant_name,
        user_id: userID,
		date_planted: Date().toLocaleString(),
		last_watered: "N/A",
		last_fertilized: "N/A",
		last_sprayed: "N/A",
    }
    try {
        personalPlantRef.push().set(
            newPlant
        );
    } catch(error) {
        console.error("Error adding new personal plant", error)
        return false;
    }
    console.log("Sucessfully afdded a new plant");
    return true;
}

/**
 * Deletes a new personal plant given the plant's id
 * Returns false when delete fails and true when delete is successful
 * @param {*} plant_id the type of plant that the personal plant is
 */
export const deletePersonalPlant = (plant_id) => {
    const personalPlantRef = firebase.database().ref('personal_plant');
    try {
        personalPlantRef.child(plant_id).remove();
    } catch(error) {
        console.error("Error deleting personal plant", error)
        return false;
    }
    console.log("Sucessfully deleted personal plant");
    return true;
}


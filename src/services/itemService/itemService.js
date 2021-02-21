import { firestore, firebase } from '../../firebase/config'
const entityRef = firestore.collection('entities');
const items = firebase.database().ref('plants');

// Returns all of the plants in the database
export const testItems = async (callback) => {
    let vals = [];
    const snapshots = await items.once('value').then(res => {
        const objs = res.val();
        Object.keys(objs).map( (key,index)=>{
            vals.push(objs[key]);
        });
        callback(vals);
    });
}

/**
 * Returns all the personal plants for a user 
 * 
 * @param {*} pPlants 
 * @param {*} callback 
 */
export const getPlants = async (pPlants, callback) => {
    let total = [];
    for(let i=0;i<pPlants.length;i++) {
        const id = pPlants[i].plant_id;
        if(!Number.isInteger(id)) return;
        const snapshots = await firebase.database().ref('plants').orderByChild("id").equalTo(id).once('value').then(res => {
            const objs = res.val();
            // console.log(objs);
            Object.keys(objs).map( (key,index)=>{
                pPlants[i].plant = objs[key];
            });
        });
    }
    callback(pPlants);
}

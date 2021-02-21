import { firebase } from '../../firebase/config'

// Retrieve Settings
export const fetchSettings = async (id, callback) => {
	// console.log(id);
	
	const settingsRef = firebase.database().ref(`settings/${id}`);
	
	await settingsRef.once('value')
        .then(snapshot => {
		
		// If user has settings already
		if (snapshot.exists()) {
			var dark_mode = snapshot.val().dark_mode;
			var fertilizer = snapshot.val().notifications.fertilizer;
			var harvest = snapshot.val().notifications.harvest;
			var watering = snapshot.val().notifications.watering;
			
			var settings =  {
				dark_mode,
				fertilizer,
				harvest,
				watering,
			};
			
			callback(settings);
			return settings;
			
		// Else, create new default settings for them
		} else {
			settingsRef.set({
				'dark_mode': 'FALSE', 
			})
			settingsRef.child('notifications').set({
				'fertilizer': 'FALSE', 
				'harvest': 'FALSE',
				'watering': 'FALSE'
			})
			
			fetchSettings(id, callback);
		}
     })    
	 .catch(error => {
        alert(error);
        return false;
    })
}

/** 
Update Dark Mode
Just changes boolean to its opposite (if dark mode is on, turns it off) */
export const updateDarkMode = async (id, callback) => { 
	const settingsRef = firebase.database().ref(`settings/${id}`);
	var dark_mode;
	
	await settingsRef.once('value')
        .then(snapshot => {
		
		dark_mode = snapshot.val().dark_mode;
     });
	
	if (dark_mode == "TRUE") {
		settingsRef.update({'dark_mode':'FALSE'});
	} else {
		settingsRef.update({'dark_mode':'TRUE'});
	}
	
	fetchSettings(id, callback);
}

/** Update fertilizer (notification) */
export const updateFertilizer = async (id, callback) => {
	const settingsRef = firebase.database().ref(`settings/${id}`);
	var fertilizer;
	
	await settingsRef.once('value')
        .then(snapshot => {
		
		fertilizer = snapshot.val().notifications.fertilizer;
     });
	
	if (fertilizer == "TRUE") {
		settingsRef.child('notifications').update({'fertilizer':'FALSE'});
	} else {
		settingsRef.child('notifications').update({'fertilizer':'TRUE'});
	}
	
	fetchSettings(id, callback);
}

/** Update harvest (notification) */
export const updateHarvest = async (id, callback) => { 
	const settingsRef = firebase.database().ref(`settings/${id}`);
	var harvest;
	
	await settingsRef.once('value')
        .then(snapshot => {
		
		harvest = snapshot.val().notifications.harvest;
     });
	
	if (harvest == "TRUE") {
		settingsRef.child('notifications').update({'harvest':'FALSE'});
	} else {
		settingsRef.child('notifications').update({'harvest':'TRUE'});
	}
	
	fetchSettings(id, callback);
}

/** Update watering (notification) */
export const updateWatering = async (id, callback) => { 
	const settingsRef = firebase.database().ref(`settings/${id}`);
	var watering;
	
	await settingsRef.once('value')
        .then(snapshot => {
		
		watering = snapshot.val().notifications.watering;
     });
	
	if (watering == "TRUE") {
		settingsRef.child('notifications').update({'watering':'FALSE'});
	} else {
		settingsRef.child('notifications').update({'watering':'TRUE'});
	}
	
	fetchSettings(id, callback);
}
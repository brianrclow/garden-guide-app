import { auth, firebase } from '../../firebase/config'

/**
 * Log in to the application given the email and password
 * @param {} email 
 * @param {*} password 
 */
export const loginWithEmail = (email, password) => {
  auth.signInWithEmailAndPassword(email, password)
    .then((response) => {
        const uid = response.user.uid
        const userRef = firebase.database().ref(`users/${uid}`);
        userRef.once("value").then(function(snapshot) {
          if(snapshot.exists) {
            var name = snapshot.val().name;
            var email = snapshot.val().email;
            var uid = uid;
           
            const user =  {
              uid,
              name,
              email,
            };
            return user;
          }
          else {
            alert("User does not exist anymore");
            return false;
          }
        });
    })
    .catch(error => {
        console.log("Error in login with email");
        alert(error);
        return false;
    })
}

/**
 * Create a new account given email address, password, and full name
 * @param {} emailAddress 
 * @param {*} pass 
 * @param {*} fullName 
 */
export const createAccount = async (emailAddress, pass, fullName) => {
    auth.createUserWithEmailAndPassword(emailAddress, pass)
        .then((response) => {
            const uid = response.user.uid;
            
            const userRef = (firebase.database().ref(`users/${uid}`));
            // Kind of a dirty trick to force authChanged not to call is to have the document generated during the process
              try {
                userRef.set({
                  email: emailAddress,
                  password: pass,
                  name: fullName,
                  app_version: 0,
                  setting_id: 0
              }).then(() => {
                return true;
            });
              } catch (error) {
                console.error("Error creating user document", error);
                return false;
              }
        })
        .catch((error) => {
            alert(error);
            return false;
    });
}

/**
 * Generates the current user in the database if not already there, returns
 * the user's information
 * @param {} user 
 * @param {*} additionalData 
 */
export const generateUserDoc = async (user, additionalData = null) => {
    if (!user) return;
    const userRef = firebase.database().ref(`users/${user.uid}`);
    await userRef.once("value").then(function(snapshot) {
      if(!snapshot.exists) {
        const { uid, email } = user;
        try {
          userRef.set({
            email, 
          });
        } catch (error) {
          console.error("Error creating user document", error);
          return false;
        }
      }
    });
    const userDoc = await getUserDocument(user.uid);
    return userDoc;
  };
  
  /**
   * Returns the current user's name and email and id
   * @param {*} uid 
   */
 export const getUserDocument = async uid => {
    if (!uid) return null;
    try {
      const userDocument = firebase.database().ref(`users/${uid}`);
      const snapshot = await (await userDocument.once("value")).val();
      console.log("SNAPSHOT");
      console.log(snapshot);
      var name = snapshot.name;
      var email = snapshot.email;

      return  {
        uid,
        name,
        email,
      };
    } catch (error) {
      console.error("Error fetching user", error);
      return false;
    }
  }
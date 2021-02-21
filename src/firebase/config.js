import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyALvdJyroB2MSf5qA7hCl-iFVYysYKH_fE',
  authDomain: 'mygardenapp-cs481.firebaseapp.com',
  databaseURL: 'https://mygardenapp-cs481.firebaseio.com',
  projectId: 'mygardenapp-cs481',
  storageBucket: 'mygardenapp-cs481.appspot.com',
  messagingSenderId: '585164898933',
  appId: '1:585164898933:ios:b6ffadb26e90044ec72e3c',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export { firebase };
import firebase from 'firebase';
import 'firebase/firestore';



const firebaseConfig ={ 
    apiKey: "AIzaSyC8aE8DNeqbLyFc5WqhuQymaK-MMgXbOqY",
    authDomain: "revented.firebaseapp.com",
    databaseURL: "https://revented.firebaseio.com",
    projectId: "revented",
    storageBucket: "revented.appspot.com",
    messagingSenderId: "865126690143"
}

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore()
const settings = {
    timestampsInSnapshots:true
}
firestore.settings(settings);
export default firebase
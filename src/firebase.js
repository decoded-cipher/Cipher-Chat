import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCsTE_WRa12T7OYj6FwIPHj5cp59LZZQvQ",
    authDomain: "my-cipher-chat.firebaseapp.com",
    databaseURL: "https://my-cipher-chat.firebaseio.com",
    projectId: "my-cipher-chat",
    storageBucket: "my-cipher-chat.appspot.com",
    messagingSenderId: "846146495611",
    appId: "1:846146495611:web:59f3201083bf48b8f1aede"
};
firebase.initializeApp(firebaseConfig);

export default firebase
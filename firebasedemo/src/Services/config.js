import Firebase from 'firebase';
var config = {
    apiKey: "AIzaSyDAH2QOsyVoSVc2-nGPJlYCDx9QBA4bkBY",
    authDomain: "fir-demo-98cf5.firebaseapp.com",
    databaseURL: "https://fir-demo-98cf5.firebaseio.com",
    projectId: "fir-demo-98cf5",
    storageBucket: "fir-demo-98cf5.appspot.com",
    messagingSenderId: "645972519061"

};
let app=Firebase.initializeApp(config);
export const db=app.database();
export const firebaseApp=app.auth();
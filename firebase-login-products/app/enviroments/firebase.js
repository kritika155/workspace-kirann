// import firebase from '@firebase/app';
// import '@firebase/auth';

// const config ={
//   apiKey: "AIzaSyD3kU46iDReqK8AQHX5GDcSu4U8hcKz5gU",
//   authDomain: "angularlogin-e50b0.firebaseapp.com",
//   databaseURL: "https://angularlogin-e50b0.firebaseio.com",
//   projectId: "angularlogin-e50b0",
//   storageBucket: "angularlogin-e50b0.appspot.com",
//   messagingSenderId: "678866814154"
// };

// let instance = null;

// class FirebaseService {
//   constructor() {
//     if (!instance) {
//       this.app = firebase.initializeApp(config);
//       instance = this;
//     }
//     return instance;
//   }
// }

// const firebaseService = new FirebaseService().app;
// export default firebaseService;
import firebase from 'firebase';
// import '@firebase/auth';

const config ={
  apiKey: "AIzaSyD3kU46iDReqK8AQHX5GDcSu4U8hcKz5gU",
  authDomain: "angularlogin-e50b0.firebaseapp.com",
  databaseURL: "https://angularlogin-e50b0.firebaseio.com",
  projectId: "angularlogin-e50b0",
  storageBucket: "angularlogin-e50b0.appspot.com",
    messagingSenderId: "678866814154"
};

let instance = null;

class FirebaseService {
  constructor() {
    if (!instance) {
      this.app = firebase.initializeApp(config);
      this.db = this.app.database();
      this.auth = this.app;
      instance = this;
    }
    return instance;
  }
}

const firebaseService = new FirebaseService().app;
export default firebaseService;


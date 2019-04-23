// import {db} from './config';

// export const registerUser=(userInfo)=>{
//     db.ref('/users').push(userInfo,err=>{
//         console.log(err);
//     });
// };
// export const loginUser =(user)=>{
//     //
// }


import { db,firebaseApp } from '../Services/config';

//To add user data  //method -> outside class - arrow operator needed.
export const registerUser=(userInfo)=>{
   // db.ref('/userList').push(userInfo,err=>{
    return firebaseApp.createUserWithEmailAndPassword(userInfo.email,userInfo.password);       

}
export const loginUser = (userInfo)=>{
    return firebaseApp.signInWithEmailAndPassword(userInfo.email,userInfo.password);
}

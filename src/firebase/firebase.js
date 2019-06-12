import * as firebase from 'firebase'

// Your web app's Firebase configuration
var config = {
    apiKey: "AIzaSyCnxN0x-08bFNlzXmo1Qnjv7t74pPRGpSM",
    authDomain: "expensify-20732.firebaseapp.com",
    databaseURL: "https://expensify-20732.firebaseio.com",
    projectId: "expensify-20732",
    storageBucket: "expensify-20732.appspot.com",
    messagingSenderId: "52025535547",
    appId: "1:52025535547:web:a65ca4a9f3d2d0de"
};
firebase.initializeApp(config);

const database = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()


export { firebase, googleAuthProvider, database as default }

// database.ref('notes').remove()

// database.ref('expenses').push({
//     description:'This is my first expense',
//     note: "This money is for buying the new courses",
//     amount:100022,
//     createdAt:12933233432
// })

// database.ref().set({
//     name: 'Angel Manuel',
//     lastName:'Góez Giraldo',
//     location:{
//         city: "Medellín",
//         country:'Colombia'
//     }
// }).then((data) => {
//     console.log('The data got saved')
// }).catch((error) => {
//     console.log('Something went wrong')
// })


// database.ref().set({
//     name: 'Emanuel',
//     lastName:'Góez Roldan',
//     location:{
//         city: "Medellín",
//         country:'Colombia'
//     }
// }).then((data) => {
//     console.log('The data got saved')
// }).catch((error) => {
//     console.log('Something went wrong')
// })

// database.ref('attributes').set({
//     peso:"500",
//     altura:"200"
// }).then((data) => {
//     console.log('The data got saved')
// }).catch((error) => {
//     console.log('Something went wrong')
// })
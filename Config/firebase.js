import firebase from 'firebase'
import { Alert } from 'react-native'
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBjkIev9fzuqs_Szxho1k_MXtp_zDBo-ac",
  authDomain: "chat-mobile-app-675c4.firebaseapp.com",
  projectId: "chat-mobile-app-675c4",
  storageBucket: "chat-mobile-app-675c4.appspot.com",
  messagingSenderId: "45329610412",
  appId: "1:45329610412:web:15c34435eb9672f4f59109"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth()
const db = firebase.firestore()

// function for registering user
const registerUser = (email, password, fullName) => {
  console.log(`firebase reg method run! 
  provided email is ${email} password is ${password} full name is ${fullName}`)
  //calling firebase method for registering user
  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      var userID = userCredential.user.uid;
      // calling firebase method for saving user details
      db.collection("allUsers").add({
        email,
        fullName,
        userID
      })
      .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
          Alert.alert(
            "SUCCESS",
            "You are successfully registered",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
          );
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
          var errorCode = error.code;
          var errorMessage = error.message;
          Alert.alert(
            "ERROR",
            errorMessage,
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
          );
        });
       })
    .catch((error) => {
      var errorMessage = error.message;
      Alert.alert(
        "ERROR",
        errorMessage,
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      );
    });
}

// function for signing in user
const signInUser = (email, password) => {
  console.log('Signin user')
  // calling firebase method for signing in user
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(`user login ${user}`)

    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      Alert.alert(
        "ERROR",
        errorMessage,
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      );
    });
}

// function for saving user's message
const saveUserMessage = (userMsg) =>{
  console.log(`firebase save user's message run ${userMsg}`)
  db.collection('allUsersMessage').add({
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    userMsg
  })
  .then(res=>{console.log(`user msg sent!`)})
  .catch(error=>{console.log(`error => ${error}`)})
}
export {
  registerUser,
  signInUser,
  auth,
  saveUserMessage
}
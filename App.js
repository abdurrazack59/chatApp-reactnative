import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import FirstView from './Views/FirstView'
import SignupView from './Views/SignupView'
import LoginView from './Views/LoginView'
import HomeView from './Views/HomeView'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { auth } from './Config/firebase'
export default function App() {
  useEffect(()=>{
    auth.onAuthStateChanged( user => { user ? setUserStatus(true) : setUserStatus(false) })
    })
  const [userStatus, setUserStatus] = useState(false)
  const Stack = createStackNavigator();

  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="firstview" >
        { userStatus ? <Stack.Screen name="homeview" component={HomeView} 
          options={{title: ' ', headerStyle: { backgroundColor: '#35354c' }}} />  : 

          <Stack.Screen name="firstview" component={FirstView} options={{ title: '' }} />
        }
        <Stack.Screen name="signupview" component={SignupView} options={{ title: 'Sign up' }} />
        <Stack.Screen name="loginview" component={LoginView} options={{ title: 'Log in' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


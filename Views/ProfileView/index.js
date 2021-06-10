import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import signupImage from '../../assets/signup-img.png'
import * as Font from 'expo-font';
import { useFonts } from 'expo-font';
import { signOutUser } from '../../Config/firebase'

export default function ProfileView({ navigation }) {

    // this const will return boolean value 
    const [loaded] = useFonts({
        Nunito: require('../../assets/fonts/Nunito-Bold.ttf'),
    });

    // getting user details on change text 
    const [userEmail, setUserEmail] = useState('')
    const [userFullName, setUserFullName] = useState('')
    const [userPassword, setUserPassword] = useState('')

    // registering user 
    const signingOut = () => {
        signOutUser()
            .then(res => {
                console.log("user sign out!")

            })
            .catch(error => { console.log(error) })
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={signupImage}
                />
            </View>
            <ScrollView style={{ width: '100%' }}>
                <View style={styles.detailsContainer}>
                    <Text style={styles.heading}>Muhammad Azhar Iqbal</Text>
                    <Text style={styles.para}>muhammad1azhar2@gmail.com</Text>


                    <TouchableOpacity
                        style={styles.btn}
                        onPress={() => { signingOut() }}>
                        <Text style={{ color: '#fff', fontSize: 18, textAlign: 'center' }}>Log out</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>


            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',

    },
    image: {
        height: "80%",
        width: '80%',
        margin: 'auto'

    },
    detailsContainer: {
        flex: 8,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    heading: {
        fontFamily: 'Nunito',
        fontSize: 35,
        color: '#35354c',
    },
    para: {
        fontFamily: 'Nunito',
        fontSize: 18,
        color: '#9c9ca9',
    },

    btn: {
        height: 65,
        padding: 10,
        width: '80%',
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#35354c",
        borderRadius: 50,
        shadowColor: '#35354c',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.77,
        shadowRadius: 5.677,
        elevation: 3,

    },
    input: {
        height: 50,
        padding: 10,
        borderBottomColor: '#35354c',
        borderBottomWidth: 2,
        fontFamily: 'Nunito',
        width: "80%",
        margin: 10
    }
    //   backgroundColor:'#35354c, #e8d9da'
});

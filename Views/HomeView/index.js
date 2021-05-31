import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import * as Font from 'expo-font';
import { useFonts } from 'expo-font';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import {saveUserMessage} from '../../Config/firebase'
export default function HomeView({ navigation }) {
    console.log(navigation)
    // this const will return boolean value 
    const [loaded] = useFonts({
        Nunito: require('../../assets/fonts/Nunito-Bold.ttf'),
    });
   
    // getting user input message on change text 
    const [userInputMessage, setUserInputMessage] = useState('')
   
    // saving user message 
    const saveUserMessage = () =>{
        console.log(`user said : ${userInputMessage}`)
        saveUserMessage(userInputMessage)
    }
    return (
        
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.heading}>Chat With Friends</Text>
                <ScrollView
                    horizontal={true} showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}>
                    <View style={styles.box}></View>
                    <View style={styles.box}></View>
                    <View style={styles.box}></View>
                    <View style={styles.box}></View>
                    <View style={styles.box}></View>
                    <View style={styles.box}></View>
                    <View style={styles.box}></View>

                </ScrollView>
                <Text style={styles.para}> . All Messages</Text>
            </View>
            <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
                <View style={styles.allMsgsContainer}>

                    <View style={styles.msgContainer}>
                        <View style={styles.avatar}>
                            <Text style={styles.para}>AI</Text>
                        </View>

                        <View style={styles.userMsg}>

                            <Text style={styles.para}>hello, this is azhar here!</Text>
                            <Text style={styles.para}>3 : 00 PM</Text>
                        </View>
                    </View>


                    <View style={styles.mineMsg}>
                        <Text style={styles.para}>hello, this is azhar here!</Text>
                        <Text style={styles.para}>3 : 00 PM</Text>
                    </View>





                </View>


            </ScrollView>
            <View style={styles.footer}>
                <TextInput 
                style={styles.input} 
                placeholder='Type your message' 
                placeholderTextColor="#8a8b9e"
                onChangeText={(text)=>{setUserInputMessage(text)}}
                ></TextInput>
                <TouchableOpacity onPress={()=>{ saveUserMessage()}}>
                    <FontAwesomeIcon icon={faPaperPlane} size={25} />
                </TouchableOpacity>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#35354c',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        flex: 0.4,
        width: '100%',
        textAlign: 'left',
        justifyContent: 'center',
        padding: 10


    },
    scroll: {
        width: '100%',
        backgroundColor: '#fff',
        flex: 7,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    allMsgsContainer: {

        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'


    },
    msgContainer: {

        width: '100%',
        flexDirection: 'row'
    },
    avatar: {
        height: 60,
        width: 60,
        backgroundColor: '#35354c',
        borderRadius: 50,
        margin: 5,
        justifyContent: "center",
        alignItems: 'center'

    },
    userMsg: {
        backgroundColor: "#f5f4f7",
        height: 'auto',
        width: '80%',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
        margin: 5,
        padding: 10


    },

    mineMsg: {
        backgroundColor: '#e8eeee',
        height: 'auto',
        width: '80%',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25,
        margin: 5,
        padding: 10

    },
    heading: {
        fontFamily: 'Nunito',
        fontSize: 35,
        color: '#fff',


    },
    para: {
        fontFamily: 'Nunito',
        fontSize: 18,
        color: '#9c9ca9',
    },
    box: {
        height: 80,
        width: 80,
        backgroundColor: '#fff',
        borderRadius: 50,
        margin: 10
    },
    input: {

        height: 50,
        padding: 10,
        // backgroundColor:"#e3e2e7",
        borderRadius: 20,

        fontFamily: 'Nunito',
        width: "90%",

    },
    footer: {
        backgroundColor: '#fff',
        width: '100%',
        flex: 0.1,
        padding: 10,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',

    }
});

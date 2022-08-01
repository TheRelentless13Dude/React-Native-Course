import React from 'react';
import {ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';


import Header from "../components/Header";
import Card from "../components/Card";
import Colors from "../constants/app/Colors";


const MainScreen = props => {
    return (


        <View style={styles.screen}>
            {/*<Header title="A Township Tale"/>*/}
            <ScrollView>
                <ImageBackground
                    style={styles.background}
                    source={{uri: 'https://altastatic.sfo2.cdn.digitaloceanspaces.com/supporter_background.jpg'}}
                    resizeMode="cover"
                    fadeDuration={0}
                >
                    <Card style={styles.cardContainer}>
                        <Text style={styles.introText}>
                            Welcome to the wiki app for A Township Tale!!
                            
                        </Text>
                        <Text style={styles.introText}>
                            Below is a list of Categories which you can search for information on anything to do with A
                            Township Tale!
                        </Text>
                    </Card>

                    <View style={styles.cardContainer}>

                        <Card style={styles.cardLayout}>
                            <TouchableOpacity style={styles.button} onPress={() => {
                                props.navigation.navigate({routeName: "Professions"});
                            }}>
                                <Text style={styles.introText}>Professions</Text>
                            </TouchableOpacity>
                        </Card>
                        <Card style={styles.cardLayout}>
                            <TouchableOpacity style={styles.button} onPress={() => {
                                props.navigation.navigate({routeName: "Resources"});
                            }}>
                                <Text style={styles.introText}>Resources</Text>
                            </TouchableOpacity>
                        </Card>
                        <Card style={styles.cardLayout}>
                            <TouchableOpacity style={styles.button} onPress={() => {
                                props.navigation.navigate({routeName: "Equipment"});
                            }}>
                                <Text style={styles.introText}>Equipment</Text>
                            </TouchableOpacity>
                        </Card>
                        <Card style={styles.cardLayout}>
                            <TouchableOpacity style={styles.button} onPress={() => {
                                props.navigation.navigate({routeName: "Buildings"});
                            }}>
                                <Text style={styles.introText}>Buildings</Text>
                            </TouchableOpacity>
                        </Card>
                        <Card style={styles.cardLayout}>
                            <TouchableOpacity style={styles.button} onPress={() => {
                                props.navigation.navigate({routeName: "Shrines"});
                            }}>
                                <Text style={styles.introText}>Shrines</Text>
                            </TouchableOpacity>
                        </Card>

                    </View>
                </ImageBackground>
            </ScrollView>
        </View>
    )
};


const styles = StyleSheet.create(
    {
        screen: {
            flex: 1
        },
        title: {
            justifyContent: 'center',
            alignItems: 'center',
        },
        background: {
            width: '100%',
            height: '100%',
        },
        cardContainer: {
            margin: 20,
            padding: 15,
            justifyContent: 'center',
            alignItems: 'center',

        },
        cardLayout: {
            width: '55%',
            marginHorizontal: 30,
            marginVertical: 20,
            justifyContent: 'center',
            alignItems: 'center',

        },
        introText: {
            flexDirection: 'row',
            color: 'white',
            fontSize: 18,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 10,
        },
        button: {
            backgroundColor: 'transparent',
        },
    });

export default MainScreen;

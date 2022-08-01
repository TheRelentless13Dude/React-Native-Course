import React from 'react';
import {ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import Card from "../../components/Card";

const ProfessionsScreen = props => {
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
                    <Card style={styles.professionsContainer}>
                        <Text style={styles.introText}>
                            This is the Professions screen!!

                        </Text>
                        <Text style={styles.introText}>
                            Below is a list of different professions you can choose to follow throughout the game.
                            You can either stick to one role, or blend the roles to form your own unique role!!
                            Each option in the list will take you to a page with more information on each role!!
                        </Text>
                    </Card>

                    <View style={styles.professionsContainer}>

                        <Card style={styles.cardLayout}>
                            <TouchableOpacity style={styles.button} onPress={() => {
                                props.navigation.navigate({routeName: "Blacksmith"});
                            }}>
                                <Text style={styles.introText}>Blacksmith</Text>
                            </TouchableOpacity>
                        </Card>

                        <Card style={styles.cardLayout}>
                            <TouchableOpacity style={styles.button} onPress={() => {
                                props.navigation.navigate({routeName: "Carpenter"});
                            }}>
                                <Text style={styles.introText}>Carpenter</Text>
                            </TouchableOpacity>
                        </Card>

                        <Card style={styles.cardLayout}>
                            <TouchableOpacity style={styles.button} onPress={() => {
                                props.navigation.navigate({routeName: "Cook"});
                            }}>
                                <Text style={styles.introText}>Cook</Text>
                            </TouchableOpacity>
                        </Card>

                        <Card style={styles.cardLayout}>
                            <TouchableOpacity style={styles.button} onPress={() => {
                                props.navigation.navigate({routeName: "Farmer"});
                            }}>
                                <Text style={styles.introText}>Farmer</Text>
                            </TouchableOpacity>
                        </Card>

                        <Card style={styles.cardLayout}>
                            <TouchableOpacity style={styles.button} onPress={() => {
                                props.navigation.navigate({routeName: "Janitor"});
                            }}>
                                <Text style={styles.introText}>Janitor</Text>
                            </TouchableOpacity>
                        </Card>

                        <Card style={styles.cardLayout}>
                            <TouchableOpacity style={styles.button} onPress={() => {
                                props.navigation.navigate({routeName: "Merchant"});
                            }}>
                                <Text style={styles.introText}>Merchant</Text>
                            </TouchableOpacity>
                        </Card>

                        <Card style={styles.cardLayout}>
                            <TouchableOpacity style={styles.button} onPress={() => {
                                props.navigation.navigate({routeName: "Miner"});
                            }}>
                                <Text style={styles.introText}>Miner</Text>
                            </TouchableOpacity>
                        </Card>

                        <Card style={styles.cardLayout}>
                            <TouchableOpacity style={styles.button} onPress={() => {
                                props.navigation.navigate({routeName: "Ranger"});
                            }}>
                                <Text style={styles.introText}>Ranger</Text>
                            </TouchableOpacity>
                        </Card>

                        <Card style={styles.cardLayout}>
                            <TouchableOpacity style={styles.button} onPress={() => {
                                props.navigation.navigate({routeName: "Warrior"});
                            }}>
                                <Text style={styles.introText}>Warrior</Text>
                            </TouchableOpacity>
                        </Card>

                        <Card style={styles.cardLayout}>
                            <TouchableOpacity style={styles.button} onPress={() => {
                                props.navigation.navigate({routeName: "Woodcutter"});
                            }}>
                                <Text style={styles.introText}>Woodcutter</Text>
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
        professionsContainer: {
            marginTop: 20,
            marginHorizontal: 20,
            marginBottom: 5,
            padding: 15,
            justifyContent: 'center',
            alignItems: 'center',

        },
        cardLayout: {
            width: '55%',
            marginHorizontal: 25,
            marginVertical: 10,
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

export default ProfessionsScreen;

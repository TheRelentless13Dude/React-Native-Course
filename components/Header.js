import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, ImageBackground} from "react-native";
import Colors from "../constants/app/Colors";

const Header = props => {
    return (
      <SafeAreaView style={styles.header} >

            <Text style={styles.headerTitle} > {props.title} </Text>
          {/*<ImageBackground source={{uri: 'https://townshiptale.com/static/dividers/bottom_middle.svg'}}/>*/}

      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    header: {
        marginTop: 25,
        width: '100%',
        height: 75,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        color: 'white',
        fontSize: 30,
        textDecorationLine: 'underline',
    }
});

export default Header;

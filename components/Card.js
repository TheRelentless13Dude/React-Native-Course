import React from "react";
import {View, Text, StyleSheet, Image, Dimensions} from "react-native";
import Colors from "../constants/app/Colors";

const Card = props=> {
    return(
        <View style={{...styles.card, ...props.style}}>{props.children}</View>
    );
};

const styles = StyleSheet.create({
    card: {
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 30,
        backgroundColor: Colors.background1,
        padding: Dimensions.get('window').height > 100 ? 10 : 5,
        borderRadius: 15
    },
});

export default Card;

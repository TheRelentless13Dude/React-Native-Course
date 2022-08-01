import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BuildingsScreen = props => {
    return (
        <View>
            <Text> This is the Buildings Screen </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default BuildingsScreen;

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MinerScreen = props => {
    return (
        <View>
            <Text>This is the Miner Screen</Text>
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

export default MinerScreen;

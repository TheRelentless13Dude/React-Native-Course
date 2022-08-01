import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MineralsScreen = props => {
    return (
        <View>
            <Text>This is the Minerals Screen</Text>
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

export default MineralsScreen;

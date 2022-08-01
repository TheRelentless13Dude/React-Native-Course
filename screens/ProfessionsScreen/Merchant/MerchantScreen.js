import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MerchantScreen = props => {
    return (
        <View>
            <Text>This is the Merchant Screen</Text>
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

export default MerchantScreen;

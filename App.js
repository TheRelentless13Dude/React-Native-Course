import React, {e} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import ScreenNavigator from "./navigation/ScreenNavigation";

import MainScreen from "./screens/MainScreen";

export default function App() {

    let content = <MainScreen/>

    return (
        <SafeAreaView style={styles.screen}>
            {/*{content}*/}
        <ScreenNavigator />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },

});

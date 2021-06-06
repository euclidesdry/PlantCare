import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet
} from 'react-native';

// Styles
import colors from '../styles/colors';
import fonts from '../styles/fonts';

// Components
import { Header } from '../components/Header';

export function PlantSelect() {
    return (
        <View style={styles.container}>
            <Header />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    }
})
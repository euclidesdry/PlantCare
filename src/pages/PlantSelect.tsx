import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

// Styles
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function PlantSelect() {
    return (
        <SafeAreaView>
            <View>
                <Text> Selecionar Planta </Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    }
})
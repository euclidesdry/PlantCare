import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import wateringImg from '../assets/watering.png';

export function Welcome() {
    return (
        <View style={styles.container}>
            <Text>Cuide facilmente as suas Plantas</Text>

            <Image source={wateringImg} />

            <Text>
                Não esqueça mais de regar suas plantas.
                Nós cuidamos de lembrar você sempre que precisar.
            </Text>

            <TouchableOpacity>
                >
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})
import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet } from 'react-native';

import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';

// Components
import { Button } from '../components/Button';

export function Welcome() {
    const [visible, setVisible] = useState(false);

    function handleVisibility() {
        setVisible(true)
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Cuide facilmente as suas Plantas.</Text>

            <View style={styles.imageContainer}>
                <Image source={wateringImg} style={styles.image}/>
            </View>

            <Text style={styles.subtitle}>
                Não esqueça mais de regar suas plantas.
                Nós cuidamos de lembrar você sempre que precisar.
            </Text>

            <Button title=">"/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 78
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 30,
        color: colors.heading
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 292
    }
})
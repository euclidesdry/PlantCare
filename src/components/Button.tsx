import React from "react";
import colors from "../styles/colors";
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export function Button() {
    return (
        <TouchableOpacity 
                style={styles.button}
                activeOpacity={0.7}
            >
            <Text style={styles.buttonText}>
                Avançar
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56
    },
    buttonText: {
        color: colors.white,
        fontSize: 24
    }
})
import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    Image,
    KeyboardAvoidingView,
    Platform,
    StyleSheet
} from "react-native";
import { useNavigation } from '@react-navigation/core';

// Styles
import colors from "../styles/colors";
import fonts from "../styles/fonts";

// Components
import { Button } from "../components/Button";

export function Confirmation() {

    const navigation = useNavigation();

    function handleMoveOn() {
        navigation.navigate('PlantSelect');
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.emoji}>
                    😄
                </Text>

                <Text style={styles.title}>
                    Tudo Preparado!
                </Text>

                <Text style={styles.subtitle}>
                    Agora vomos começar a cuidar das suas plantinhas com muito carinho.
                </Text>

                <View style={styles.footer}>
                    <Button
                        title="Iniciar"
                        onPress={handleMoveOn}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: 20
    },
    emoji: {
        fontSize: 83
    },
    title: {
        fontSize: 22,
        fontFamily: fonts.heading,
        textAlign: "center",
        color: colors.heading,
        lineHeight: 38,
        marginTop: 15
    },
    subtitle: {
        fontFamily: fonts.text,
        textAlign: 'center',
        color: colors.heading,
        fontSize: 17,
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    footer: {
        width: '100%',
        paddingHorizontal: 50
    }
})
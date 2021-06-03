import React, {useState} from "react";
import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    Image,
    KeyboardAvoidingView,
    Platform,
    StyleSheet
} from 'react-native';

// styles
import colors from "../styles/colors";
import fonts from "../styles/fonts";

// Components
import { Button } from './../components/Button';

export function UserIdentification() {

    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [name, setName] = useState<string>()
    
    function handleInputBlur() {
        setIsFocused(false);
        setIsFilled(!!name);
    }

    function handleInputFocus() {
        setIsFocused(true);
    }

    function handleInputChange(value: string) {
        setIsFocused(!!value);
        setName(value)
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <View style={styles.content}>
                    <View style={styles.form}>
                        <View style={styles.header}>
                            <Text style={styles.emoji}>
                                { (!isFilled) ? '😄': '😃'}
                            </Text>

                            <Text style={styles.title}>
                                Qual é o Seu Nome?
                            </Text>
                        </View>

                        <TextInput
                            style={[
                                styles.input,
                                (isFocused || isFilled) &&
                                { borderColor: colors.green}
                            ]}
                            placeholder="Escreva o seu nome"
                            onBlur={handleInputBlur}
                            onFocus={handleInputFocus}
                            onChangeText={handleInputChange}
                        />

                        <View style={styles.footer}>
                            <Button title="Continuar"/>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    content: {
        flex: 1,
        width: '100%'
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 54,
        alignItems: 'center'
    },
    header: {
        alignItems: 'center'
    },
    emoji: {
        fontSize: 58
    },
    input: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        width: '100%',
        fontSize: 18,
        marginTop: 50,
        padding: 10, 
        textAlign: 'center'
    },
    title: {
        fontSize: 24,
        lineHeight: 32,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
        marginTop: 20
    },
    footer: {
        width: '100%',
        paddingTop: 40,
        paddingHorizontal: 20
    }
})
import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    FlatList,
    StyleSheet
} from 'react-native';

// Styles
import colors from '../styles/colors';
import fonts from '../styles/fonts';

// Components
import { Header } from '../components/Header';
import { EnviromentButton } from './../components/EnviromentButton';

export function PlantSelect() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Header />
                <Text style={styles.title}>
                    Em qual ambiente
                </Text>
                <Text style={styles.subtitle}>
                    você quer colocar sua planta?
                </Text>
            </View>

            <View style={{flex: 1}}>
                <FlatList
                    data={[1, 2, 3, 4, 5]}
                    renderItem={({ item }) => (
                        <EnviromentButton
                            key={item}
                            title={"Cozinha"}
                            active
                        />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.enviromentList}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
    header: {
        paddingHorizontal: 30
    },
    title: {
        fontSize: 17,
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 20,
        marginTop: 15
    },
    subtitle: {
        fontFamily: fonts.text,
        fontSize: 17,
        lineHeight: 20,
        color: colors.heading
    },
    enviromentList: {
        height: 40,
        justifyContent: 'center',
        paddingBottom: 5,
        marginLeft: 32,
        marginVertical: 32
    }
})
import React, { useState, useEffect } from 'react';
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
import { PlantCardPrimay } from './../components/PlantCardPrimary';

//API's
import api from '../services/api';

interface EnviromentProps {
    key: string;
    title: string;
}
interface PlantsProps {
    id: string;
    name: string;
    about: string;
    water_tips: string;
    photo: string;
    environments: [string];
    frequency: {
        times: number,
        repeat_every: string
    };
}

export function PlantSelect() {

    const [enviroments, setEnviroments] = useState<EnviromentProps[]>([]);
    const [plants, setPlants] = useState<PlantsProps[]>([]);

    useEffect(() => {
        async function fetchEnviroment() {
            const { data } = await api.get('plants_environments');

            setEnviroments([
                {
                    key: 'all',
                    title: 'Todos'
                },
                ...data
            ]);
        }

        fetchEnviroment();
    }, []);

    useEffect(() => {
        async function fetchPlants() {
            const { data } = await api.get('plants');

            setPlants(data);
        }

        fetchPlants();
    }, []);

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

            <View>
                <FlatList
                    data={enviroments}
                    renderItem={({ item }) => (
                        <EnviromentButton
                            key={item.key}
                            title={item.title}
                            active={false}
                        />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.enviromentList}
                />
            </View>

            <View style={styles.plants}>
                <FlatList
                    data={plants}
                    renderItem={({ item }) => (
                        <PlantCardPrimay data={item}/>
                    )}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    contentContainerStyle={styles.contentContainerStyle}
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
        paddingLeft: 32,
        marginVertical: 32
    },
    plants: {
        flex: 1,
        paddingHorizontal: 32,
        justifyContent: 'center'
    },
    contentContainerStyle: {
    
    }
})
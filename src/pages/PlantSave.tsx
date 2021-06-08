import React, { useState, useEffect } from "react";
import { 
    Alert,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    Platform,
    TouchableOpacity
} from "react-native";
import { SvgFromUri } from 'react-native-svg';
import { getStatusBarHeight as getIphoneXStatusBarHeight} from "react-native-iphone-x-helper";
import { useRoute, useNavigation } from "@react-navigation/core";
import DateTimePiker, { Event } from "@react-native-community/datetimepicker";
import { format, isBefore } from "date-fns";

// Libs
import { PlantProps, savePlant } from "../libs/storage";

// Assets
import waterdrop from '../assets/waterdrop.png';
import colors from "../styles/colors";
import fonts from "../styles/fonts";

// Components
import { Button } from "../components/Button";

interface Params {
    plant: PlantProps
}

export function PlantSave() {
    const navigation = useNavigation();

    const [selectedDateTime, setSelectedDateTime] = useState( new Date());
    const [showDatePicker, setShowDatePicker] = useState(Platform.OS == 'ios') // Bug to Solve

    const route = useRoute();
    const { plant } = route.params as Params;

    function handleChangeTime(event: Event, dateTime: Date | undefined) {
        if(Platform.OS === 'android') {
            setShowDatePicker(oldState => !oldState);
        }

        if(dateTime && isBefore(dateTime, new Date())) {
            setSelectedDateTime(new Date());
            
            return Alert.alert('Escolha uma hora no futuro! 🕞')
        } 
        if (dateTime)
            setSelectedDateTime(dateTime);
    }

    function handleOpenDateTimePikerForAndroid() {
        setShowDatePicker(oldState => !oldState);
    }

    async function handleSavePlant() {
        try {
            await savePlant({
                ...plant,
                dateTimeNotification: selectedDateTime
            })

            navigation.navigate('Confirmation', {
                title: 'Planta Cadastrada Correctamente!',
                subtitle: 'Fique descançado que vamos lembrar você de quando deve cuidar da sua plantinha cuidadosamente.',
                buttonTitle: 'Visualizar Planta(s)',
                icon: 'hug',
                nextScreen: 'MyPlants'
            });
        } catch {
            Alert.alert('Erro: Não foi possível salvar esta planta! 😢');
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.plantInfo}>
                <SvgFromUri
                    uri={plant.photo}
                    height={150}
                    width={150}
                />

                <Text style={styles.plantName}>
                    {plant.name}
                </Text>

                <Text style={styles.plantAbout}>
                    {plant.about}
                </Text>
            </View>

            <View style={styles.controller}>
                <View style={styles.tipContainer}>
                    <Image
                        source={waterdrop}
                        style={styles.tipImage}
                    />

                    <Text style={styles.tipText}>
                        {plant.water_tips}
                    </Text>
                </View>

                <Text style={styles.alertLabel}>
                    Escolha o melhor horário para ser lembrado
                </Text>

                {
                    showDatePicker && (
                        <DateTimePiker
                            value={selectedDateTime}
                            mode="time"
                            display="spinner"
                            onChange={handleChangeTime}
                        />
                    )
                }

                {
                    Platform.OS === 'android' && (
                        <>
                            <Text style={styles.dateTimePikerTimeBox}>
                                {`${format(selectedDateTime, 'HH')}h:${format(selectedDateTime, 'mm')}min`}
                            </Text>
                            <TouchableOpacity
                                style={styles.dateTimePikerButton}
                                onPress={handleOpenDateTimePikerForAndroid}
                            >
                                <Text style={styles.dateTimePikerText}>
                                    Mudar Horário
                                </Text>
                            </TouchableOpacity>
                        </>
                    )
                }

                <Button
                    title="Cadastrar Planta"
                    onPress={handleSavePlant}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: colors.shape
    },
    plantInfo: {
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.shape,
    },
    controller: {
        backgroundColor: colors.white,
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: getIphoneXStatusBarHeight() || 20
    },
    plantName: {
        fontFamily: fonts.heading,
        fontSize: 24,
        color: colors.heading,
        marginTop: 15
    },
    plantAbout: {
        textAlign: 'center',
        fontFamily: fonts.text,
        color: colors.heading,
        fontSize: 17,
        marginTop: 10
    },
    tipContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.blue_light,
        padding: 20,
        borderRadius: 10,
        position: 'relative',
        bottom: 70
    },
    tipImage: {
        width: 56,
        height: 56
    },
    tipText: {
        flex: 1,
        marginLeft: 20,
        fontFamily: fonts.text,
        color: colors.blue,
        fontSize: 17,
        textAlign: 'justify'
    },
    alertLabel: {
        textAlign: 'center',
        fontFamily: fonts.complement,
        color: colors.heading,
        fontSize: 12,
        marginBottom: 5
    },
    dateTimePikerTimeBox: {
        width: '100%',
        alignItems: 'center',
        alignContent: 'center',
        textAlign: 'center',
        paddingHorizontal: 10,
        paddingVertical: 20,
        paddingTop: 10,
        fontFamily: fonts.heading,
        color: colors.green_dark,
        fontSize: 38
    },
    dateTimePikerButton: {
        width: '100%',
        alignItems: 'center',
        paddingVertical: 30,
        paddingTop: 0
    },
    dateTimePikerText: {
        color: colors.heading,
        fontSize: 24,
        backgroundColor: '#f8f8f8',
        borderRadius: 10,
        padding: 10,
        paddingHorizontal: 24,
        fontFamily: fonts.text
    }
})
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export const TarjetaSerie = (props: any) => {
    const mostrarMas = (data: any) => {
        Alert.alert(
            "Información de Serie",
            `${data.titulo}\nAño: ${data.anio}\nTemporadas: ${data.metadata.temporadas}\nCreador: ${data.metadata.creador}\n\n${data.descripcion}`
        );
    };
    return (
        <TouchableOpacity
            style={styles.btn}
            onPress={() => mostrarMas(props.informacion)}
        >
            <View style={styles.cardContainer}>
                <View style={styles.containerImg}>
                    <Image
                        style={styles.img}
                        source={{ uri: props.informacion.info.imagen }}
                    />
                </View>
                <View style={styles.containerInfo}>
                    <Text style={styles.txt}>
                        {props.informacion.titulo}
                    </Text>
                    <Text style={styles.temporadas}>
                        Temporadas: {props.informacion.metadata.temporadas}
                    </Text>
                    <Text style={styles.creador}>
                        {props.informacion.metadata.creador}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    containerImg: {
        padding: 15,
        backgroundColor: '#F8BBD9'
    },
    containerInfo: {
        flex: 1,
        padding: 15,
        justifyContent: 'center',
    },
    cardContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    btn: {
        backgroundColor: "#fff",
        margin: 5,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    img: {
        height: 100,
        width: 70,
        borderRadius: 5,
        resizeMode: "cover",
    },
    txt: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    temporadas: {
        fontSize: 14,
        color: 'black',
        fontWeight: '600',
        marginBottom: 3,
    },
    creador: {
        fontSize: 12,
        color: 'black',
        fontStyle: 'italic',
    },
});
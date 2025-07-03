import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

export default function WelcomeScreen({ navigation }: any) {



    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenid@</Text>
            <TextInput
                placeholder='Ingrese su nombre'
                style={styles.textInput}
            />
            <Image
                source={{ uri: 'https://i.pinimg.com/736x/ae/4f/e6/ae4fe6ec67b6e937af428adffe6e0e0c.jpg' }}
                style={styles.image}
            />



            <View style={styles.buttonContainer}>
                <Button
                    title='Empezar'
                    onPress={() => navigation.navigate('Tabs')}
                    color="#F8BBD9"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 30,
        textAlign: 'center',
    },
    image: {
        width: 300,
        height: 300,
        marginBottom: 50,
        marginTop: 30,
        borderWidth: 4,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
    },
    textInput: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 25,
        paddingHorizontal: 20,
        fontSize: 16,
        backgroundColor: '#fff',
        marginBottom: 30,
        textAlign: 'center',
    },
    buttonContainer: {
        width: '80%',
        height: 50,
        borderRadius: 25,
        marginTop: 20,
        
    },
})
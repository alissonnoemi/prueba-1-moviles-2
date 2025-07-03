import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { db } from '../firestore/Config'
import { setDoc, doc } from 'firebase/firestore'
import { TextInput } from 'react-native-gesture-handler'

export default function Screen1() {
  const [nombre, setnombre] = useState("")
  const [id, setid] = useState("")
  const [monto, setmonto] = useState(0)
  const [categoria, setcategoria] = useState("")
  const [descripcion, setdescripcion] = useState("")

  async function guardar() {
    await setDoc(doc(db, "autos", id), {
      id: id,
      name: nombre,
      monto: monto,
      categoria: categoria,
      descripcion: descripcion,
    });

    setnombre("");
    setid("");
    setmonto(0);
    setcategoria("");
    setdescripcion("");

    Alert.alert( "Auto registrado correctamente");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrar Auto</Text>

      <TextInput
        placeholder='Ingresar ID'
        value={id}
        onChangeText={(texto) => setid(texto)}
        style={styles.input}
      />

      <TextInput
        placeholder='Ingresar Nombre'
        value={nombre}
        onChangeText={(texto) => setnombre(texto)}
        style={styles.input}
      />

      <TextInput
        placeholder='Ingresar monto'
        value={monto === 0 ? '' : monto.toString()}
        onChangeText={(texto) => {
          const numero = parseInt(texto);
          setmonto(isNaN(numero) ? 0 : numero);
        }}
        style={styles.input}
        keyboardType="numeric"
      />

      <TextInput
        placeholder='Ingresar categoría'
        value={categoria}
        onChangeText={(texto) => setcategoria(texto)}
        style={styles.input}
      />
      <TextInput
        placeholder='Ingresar descripción'
        value={descripcion}
        onChangeText={(texto) => setdescripcion(texto)}
        style={styles.input}
      />

      <Image
        source={{ uri: 'https://i.pinimg.com/736x/7d/f1/00/7df100892b6266e364da39106db2b619.jpg' }}
        style={styles.image}
      />
      <View style={styles.buttonContainer}>
        <Button
          title='Guardar'
          onPress={() => guardar()}
          color="#F8BBD9"
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#fff',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  image: {
    width: 200,
    height: 150,
    borderRadius: 10,
    marginVertical: 15,
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#ddd',
    shadowColor: '#000',
  },
  buttonContainer: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    marginTop: 20,
    shadowOpacity: 0.27,
  },
})
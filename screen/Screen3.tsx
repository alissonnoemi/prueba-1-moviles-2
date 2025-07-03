import { StyleSheet, Text, View, TextInput, Button, Alert, Image } from 'react-native'
import React, { useState } from 'react'
import { db } from '../firestore/Config'
import { updateDoc, doc, deleteDoc } from 'firebase/firestore'

export default function Screen3() {
  const [nombre, setnombre] = useState("")
  const [id, setid] = useState("")
  const [monto, setmonto] = useState(0)
  const [categoria, setcategoria] = useState("")
  const [descripcion, setdescripcion] = useState("")
 

  async function editar() {
    const docRef = doc(db, "autos", id);
    await updateDoc(docRef, {
      name: nombre,
      monto: monto,
      categoria: categoria,
      descripcion: descripcion
    });

    Alert.alert("Éxito", "Auto actualizado");
  }
  async function eliminar(){
    await deleteDoc(doc(db, "autos", id));
    Alert.alert("Éxito", "Auto eliminado");
    setid("");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Auto</Text>

      <TextInput
        placeholder="ID"
        value={id}
        onChangeText={setid}
        style={styles.input}
      />

      <TextInput
        placeholder="Nombre"
        value={nombre}
        onChangeText={setnombre}
        style={styles.input}
      />

      <TextInput
        placeholder="Monto"
        value={monto === 0 ? '' : monto.toString()}
        onChangeText={function (texto) {
          const numero = parseInt(texto);
          setmonto(isNaN(numero) ? 0 : numero);
        }}
        style={styles.input}
        keyboardType="numeric"
      />

      <TextInput
        placeholder="Categoría"
        value={categoria}
        onChangeText={setcategoria}
        style={styles.input}
      />

      <TextInput
        placeholder="Descripción"
        value={descripcion}
        onChangeText={setdescripcion}
        style={styles.input}
      />
       <Image
              source={{ uri: 'https://i.pinimg.com/736x/7d/f1/00/7df100892b6266e364da39106db2b619.jpg' }}
              style={styles.image}
            />
  
      <View style={styles.buttonContainer}>
        <Button
          title="Actualizar Auto"
          onPress={editar}
          color="#F8BBD9"
        />
      </View>
      
      <Text style={styles.subtitle}>Eliminar Auto</Text>
      <TextInput
        placeholder="Ingrese ID"
        onChangeText={(texto) => setid(texto)}
      />
      <Button color={'red'} title='Eliminar' onPress={() => eliminar()} />
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
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF6B6B',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 15,
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
  },
  inputEliminar: {
    width: '100%',
    height: 50,
    borderWidth: 2,
    borderColor: '#FF6B6B',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 20,
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
  }
})
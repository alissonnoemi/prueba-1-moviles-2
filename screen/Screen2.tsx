import { StyleSheet, Text, View, TextInput, Button, Alert, FlatList, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { db } from '../firestore/Config'
import { doc, getDoc, collection, getDocs } from 'firebase/firestore'
import Informacion from '../components/Informacion'

export default function Screen2() {
  const [idBuscar, setIdBuscar] = useState("")
  const [listaAutos, setListaAutos] = useState([] as any[])

  //buscar id
  async function buscarPorId() {
    const docRef = doc(db, "autos", idBuscar);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      Alert.alert(
        "Auto Encontrado",
        `ID: ${docSnap.id}\nNombre: ${data.name}\nMonto: $${data.monto}\nCategoría: ${data.categoria}\nDescripción: ${data.descripcion}`
      );
    } else {
      Alert.alert("No existe un auto con ese ID");
    }
  }

  //carga autos
  async function cargarTodosLosAutos() {
    const querySnapshot = await getDocs(collection(db, "autos"));
    const autos: any[] = [];
    
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      autos.push({
        id: doc.id,
        nombre: data.name,
        monto: data.monto,
        categoria: data.categoria,
        descripcion: data.descripcion
      });
    });
    
    setListaAutos(autos);
  }

  useEffect(() => {
    cargarTodosLosAutos();
  }, []);

  return (
    <ScrollView style={styles.container}>

      <View style={styles.seccion}>
        <Text style={styles.tituloSeccion}>Buscar Auto por ID</Text>
        
        <TextInput
          placeholder="Ingresa el ID del auto"
          value={idBuscar}
          onChangeText={setIdBuscar}
          style={styles.input}
        />
        
        <View style={styles.buttonContainer}>
          <Button 
            title="Buscar"
            onPress={buscarPorId}
            color="#F8BBD9"
          />
        </View>
      </View>


      <View style={styles.seccion}>
        <Text style={styles.tituloSeccion}>Lista de Autos</Text>
        <View style={styles.buttonContainer}>
          <Button 
            title="Actualizar Lista"
            onPress={cargarTodosLosAutos}
            color="#F8BBD9"
          />
        </View>
        <FlatList
          data={listaAutos}
          keyExtractor={function(item) { return item.id }}
          renderItem={function(datos) { return <Informacion autos={datos.item} /> }}
          scrollEnabled={false}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  seccion: {
    margin: 15,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: '#000',
  
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tituloSeccion: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
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
  buttonContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 15,
  },
  resultadoBusqueda: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  tituloResultado: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  textoResultado: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  textoVacio: {
    textAlign: 'center',
    fontSize: 16,
    color: '#999',
    fontStyle: 'italic',
    marginTop: 20,
  },
})
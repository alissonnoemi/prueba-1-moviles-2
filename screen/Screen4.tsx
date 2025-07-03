import { FlatList, StyleSheet, Text, View, Image, Alert, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'

export default function Screen4() {
  const [datos, setDatos] = useState([] as any[])

  async function leer() {
    const resp = await fetch(
      "https://jritsqmet.github.io/web-api/series.json"
    );
    const json = await resp.json();
    setDatos(json.series);
  }

  useEffect(function() {
    leer()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Series</Text>
      
      <FlatList
        data={datos}
        renderItem={function({ item }) {
          return (
            <TouchableOpacity style={styles.itemContainer} onPress={function() {
              Alert.alert(
                item.titulo,
                `Año: ${item.anio}\nTemporadas: ${item.metadata.temporadas}\nCreador: ${item.metadata.creador}\n\n${item.descripcion}`
              )
            }}>
              <Image 
                source={{ uri: item.info.imagen }} 
                style={styles.imagen}
              />
              <View style={styles.infoContainer}>
                <Text style={styles.titulo}>{item.titulo}</Text>
                <Text style={styles.temporadas}>Temporadas: {item.metadata.temporadas}</Text>
                <Text style={styles.creador}>{item.metadata.creador}</Text>
              </View>
            </TouchableOpacity>
          )
        }}
        keyExtractor={function(_, index) { return index.toString() }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 10,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  imagen: {
    width: 100,
    height: 150,
    borderRadius: 10,
    marginRight: 15,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  anio: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  temporadas: {
    fontSize: 14,
    color: '#F8BBD9',
    fontWeight: '600',
    marginBottom: 4,
  },
  creador: {
    fontSize: 12,
    color: '#999',
    fontStyle: 'italic',
  },
  sectionHeader: {
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: '#e0e0e0',
    padding: 10,
    color: '#333',
  },
})
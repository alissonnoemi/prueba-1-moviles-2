import { StyleSheet, Text, TouchableOpacity, Alert } from 'react-native'
import React from 'react'

export default function Informacion({ autos } : any) {
  
  const mostrarDetalles = () => {
    Alert.alert("Detalles", `${autos.nombre} - $${autos.monto},  ${autos.categoria}, ${autos.descripcion}`);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={mostrarDetalles}>
      <Text style={styles.texto}>{autos.nombre}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 15,
    margin: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  texto: {
    fontSize: 16,
    color: '#333',
  },
})

import React, { useState } from 'react';
import { View, Text, Picker, Image, StyleSheet, ScrollView } from 'react-native';
import Ejercicios from './Ejercicios';

const App = () => {
  const [parteDelCuerpo, setParteDelCuerpo] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Buscador de Ejercicios</Text>
      <Picker
        selectedValue={parteDelCuerpo}
        style={styles.picker}
        onValueChange={(itemValue) => setParteDelCuerpo(itemValue)}
      >
        <Picker.Item label="--Seleccionar--" value="" />
        <Picker.Item label="Pecho" value="pecho" />
        <Picker.Item label="Espalda" value="espalda" />
        <Picker.Item label="Brazos" value="brazos" />
        <Picker.Item label="Antebrazos" value="antebrazo" />
        <Picker.Item label="Hombros" value="hombros" />
        <Picker.Item label="Abdominales" value="abdominales" />
        <Picker.Item label="Glúteos" value="gluteos" />
        <Picker.Item label="Piernas" value="piernas" />
      </Picker>

      <Ejercicios parteDelCuerpo={parteDelCuerpo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    marginBottom: 20,
  },
  picker: {
    height: 50,
    width: 200,
    marginBottom: 20,
  },
});

export default App;

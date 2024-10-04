import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Ejercicios from './Ejercicios';
import SplashScreen from './SplashScreen';
import AboutScreen from './AboutScreen';


const App = () => {
  const [parteDelCuerpo, setParteDelCuerpo] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [showAbout, setShowAbout] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  if (showAbout) {
    return <AboutScreen onClose={() => setShowAbout(false)} />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Buscador de Ejercicios</Text>
        <Button title="Acerca de" onPress={() => setShowAbout(true)} />
      </View>
      <View style={styles.overlay}>
        <Picker
          selectedValue={parteDelCuerpo}
          style={styles.picker}
          onValueChange={(itemValue) => setParteDelCuerpo(itemValue)}
        >
          <Picker.Item label="--Seleccionar--" value="" />
          <Picker.Item label="Pecho" value="pecho" />
          <Picker.Item label="Espalda" value="espalda" />
          <Picker.Item label="Brazos" value="brazos" />
          <Picker.Item label="Antebrazos" value="antebrazos" />
          <Picker.Item label="Hombros" value="hombros" />
          <Picker.Item label="Abdominales" value="abdominales" />
          <Picker.Item label="Glúteos" value="gluteos" />
          <Picker.Item label="Piernas" value="piernas" />
          <Picker.Item label="Adulto mayor" value="adultomayor"/>
        </Picker>

        <Ejercicios parteDelCuerpo={parteDelCuerpo} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 20,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
  },
  picker: {
    height: 50,
    width: 200,
    marginBottom: 20,
  },
});

export default App;

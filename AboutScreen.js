
import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import logo from './assets/imagenes/logo.png'; 

const AboutScreen = ({ onClose }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Acerca de Esta Aplicación</Text>
      <Text style={styles.text}>Desarrollador por</Text>
      
      <Image source={logo} style={styles.logo} resizeMode="contain" />
      
      <Text style={styles.text}>Versión 1.0</Text>
      <Button title="Volver" onPress={onClose} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  logo: {
    width: 100, 
    height: 100, 
    margin: 10,
  },
});

export default AboutScreen;


import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import logo from './assets/imagenes/logo.png'; 

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} resizeMode="contain" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', 
  },
  logo: {
    width: 200, 
    height: 200,
  },
});

export default SplashScreen;

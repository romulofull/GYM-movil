import React from 'react';
import { View, Image, Text, StyleSheet, ScrollView } from 'react-native';
import gallery from './assets/gallery';

const Ejercicios = ({ parteDelCuerpo }) => {
  const imagenes = {
    pecho: [gallery.imagen1, gallery.imagen2, gallery.imagen3],
    espalda: [gallery.imagen4, gallery.imagen5],
    brazos: [gallery.imagen6, gallery.imagen7, gallery.imagen8],
    antebrazo: [gallery.imagen9, gallery.imagen10],
    hombros: [gallery.imagen11, gallery.imagen12, gallery.imagen13],
    abdominales: [gallery.imagen14, gallery.imagen15],
    gluteos: [gallery.imagen18, gallery.imagen19],
    piernas: [gallery.imagen20, gallery.imagen21, gallery.imagen22],
  };

  return (
    <ScrollView contentContainerStyle={styles.contenedorImagenes}>
      {imagenes[parteDelCuerpo] ? (
        imagenes[parteDelCuerpo].map((img, index) => (
          <Image
            key={index}
            source={img}
            style={styles.imagen}
            accessibilityLabel={`${parteDelCuerpo} ejercicio ${index + 1}`}
          />
        ))
      ) : (
        <Text style={styles.mensaje}>
          Selecciona una parte del cuerpo para ver los ejercicios
        </Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contenedorImagenes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
  },
  imagen: {
    width: 175,
    height: 150,
    margin: 10,
    borderRadius: 5,
  },
  mensaje: {
    fontSize: 18,
    color: '#333',
    marginTop: 20,
    textAlign: 'center',
  },
});

export default Ejercicios;

import React from 'react';
import { View, Image, Text, StyleSheet, ScrollView } from 'react-native';
import gallery from './assets/gallery';
const Ejercicios = ({ parteDelCuerpo }) => {
  const imagenes = {
    pecho: [gallery.imagen1, gallery.imagen2, gallery.imagen3, gallery.imagen4, gallery.imagen5, gallery.imagen6],
    espalda: [gallery.imagen8, gallery.imagen9, gallery.imagen11, gallery.imagen12, gallery.imagen13, gallery.imagen14],
    brazos: [gallery.imagen18, gallery.imagen19, gallery.imagen20, gallery.imagen21, gallery.imagen22],
    antebrazos: [gallery.imagen23, gallery.imagen24, gallery.imagen25, gallery.imagen26, gallery.imagen28], 
    hombros: [gallery.imagen29, gallery.imagen30, gallery.imagen31, gallery.imagen32, gallery.imagen33],
    abdominales: [gallery.imagen34, gallery.imagen35, gallery.imagen36, gallery.imagen37, gallery.imagen38, gallery.imagen39, gallery.imagen41],
    gluteos: [gallery.imagen43, gallery.imagen44, gallery.imagen45, gallery.imagen46, gallery.imagen47, gallery.imagen48, gallery.imagen49, gallery.imagen50],
    piernas: [gallery.imagen51, gallery.imagen52, gallery.imagen53, gallery.imagen54, gallery.imagen55, gallery.imagen56, gallery.imagen57],
    adultomayor: [gallery.imagen58, gallery.imagen59, gallery.imagen60, gallery.imagen61, gallery.imagen62, gallery.imagen63, gallery.imagen64, gallery.imagen65, gallery.imagen66, gallery.imagen67, gallery.imagen68, gallery.imagen69, gallery.imagen70, gallery.imagen71, gallery.imagen72, gallery.imagen73, gallery.imagen74, gallery.imagen75, gallery.imagen76],
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


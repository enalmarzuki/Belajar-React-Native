import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import sepatu from '../../assets/image/sepatu-1.jpg';

const Product = (props) => {
  return (
    <View style={styles.wrapper}>
      <Image source={sepatu} style={styles.image} />
      <Text style={styles.titleProduct}>Adidas Ultraboost V4</Text>
      <Text style={styles.hargaProduct}>Rp. 4.000.000</Text>
      <Text style={styles.daerahProduct}>Makassar</Text>

      <TouchableOpacity onPress={props.onButtonPress}>
        <View style={styles.buttonBG}>
          <Text style={styles.textBtn}>Beli</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  wrapper: {
    width: 312,
    padding: 12,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    marginLeft: 16,
    marginTop: 20,
  },
  image: {width: 288, height: 287, borderRadius: 8},
  titleProduct: {fontSize: 14, fontWeight: 'bold', marginTop: 16},
  hargaProduct: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 12,
    color: '#f2994a',
  },
  daerahProduct: {fontSize: 14, fontWeight: '300', marginTop: 12},
  buttonBG: {
    backgroundColor: '#6FCF97',
    paddingVertical: 6,
    borderRadius: 25,
    marginTop: 20,
  },
  textBtn: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
});

import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import chart from '../../assets/icon/chart.png';

const Cart = (props) => {
  return (
    <View>
      <View style={styles.chartWrapper}>
        <Image source={chart} style={styles.iconChart} />
        <Text style={styles.notif}>{props.quantity}</Text>
      </View>
      <Text style={styles.text}>Keranjang Belanja Anda</Text>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  chartWrapper: {
    borderWidth: 1,
    borderColor: '#4398d1',
    width: 93,
    height: 93,
    borderRadius: 93 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginTop: 40,
  },
  iconChart: {width: 50, height: 50},
  text: {fontSize: 12, color: '#777777', fontWeight: '700', marginTop: 8},
  notif: {
    fontSize: 12,
    color: 'white',
    backgroundColor: '#6fcf97',
    padding: 5,
    borderRadius: 25,
    width: 24,
    height: 24,
    position: 'absolute',
    top: 0,
    right: 0,
  },
});

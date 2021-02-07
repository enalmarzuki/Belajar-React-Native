import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import sepatu from '../../assets/image/sepatu-1.jpg';

// ===================================================================
/* START: Materi 2 */
// ===================================================================
const StylingComponent = () => {
  return (
    <View>
      <Text style={styles.text}>Styling Component</Text>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: '#0abde3',
          borderWidth: 2,
          borderColor: 'red',
          marginTop: 20,
          marginLeft: 20,
        }}
      />

      <View
        style={{
          width: 312,
          padding: 12,
          backgroundColor: '#f2f2f2',
          borderRadius: 8,
          marginLeft: 16,
        }}>
        <Image
          source={sepatu}
          style={{width: 288, height: 287, borderRadius: 8}}
        />
        <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>
          Adidas Ultraboost V4
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            marginTop: 12,
            color: '#f2994a',
          }}>
          Rp. 4.000.000
        </Text>
        <Text style={{fontSize: 14, fontWeight: '300', marginTop: 12}}>
          Makassar
        </Text>

        <View
          style={{
            backgroundColor: '#6FCF97',
            paddingVertical: 6,
            borderRadius: 25,
            marginTop: 20,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: 'white',
              textAlign: 'center',
            }}>
            Beli
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#10ac85',
    marginLeft: 20,
    marginTop: 40,
  },
});

export default StylingComponent;
// ===================================================================
/* END: Materi 2 */
// ===================================================================

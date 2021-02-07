import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import IllustrationMyApp from '../../assets/image/undraw_Location_search_re_ttoj.svg';

const ReactNativeSvg = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>
        Materi menggunakan file SVG didalam React Native
      </Text>

      <View style={styles.svgWrapper}>
        <IllustrationMyApp width={200} height={200} />
      </View>
    </View>
  );
};

export default ReactNativeSvg;

const styles = StyleSheet.create({
  container: {padding: 20},
  textTitle: {textAlign: 'center', marginBottom: 24},
  svgWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
});

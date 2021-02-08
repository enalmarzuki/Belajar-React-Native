import React from 'react';
import {ScrollView, View} from 'react-native';
import SampleComponent from './pages/SampleComponent';
import StylingComponent from './pages/StylingComponent';
import FlexBox from './pages/FlexBox';
import Position from './pages/Position';
import PropsDinamis from './pages/PropsDinamis';
import StateDinamis from './pages/StateDinamis';
import Communication from './pages/Communication';
import ReactNativeSvg from './pages/ReactNativeSvg';
import CallAPI from './pages/CallAPI';
import LocalAPI from './pages/LocalAPI';

const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent />
        <FlexBox />*/}
        {/* <StylingComponent /> */}
        {/* <Position /> */}
        {/* <PropsDinamis /> */}
        {/* <StateDinamis /> */}
        {/* <Communication /> */}
        {/* <ReactNativeSvg /> */}
        {/* <CallAPI /> */}
        <LocalAPI />
      </ScrollView>
    </View>
  );
};

export default App;

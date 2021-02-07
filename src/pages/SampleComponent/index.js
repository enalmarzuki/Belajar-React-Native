import React, {Component} from 'react';
import {View, Text, TextInput, Image} from 'react-native';

// ===================================================================
/* START: Materi 1 */
// ===================================================================

const SampleComponent = () => {
  return (
    <View>
      <View
        style={{
          width: 80,
          height: 80,
          backgroundColor: '#0abde3',
          borderRadius: 40,
        }}
      />
      <Text>Hello</Text>
      <World />

      <Text>Hello</Text>
      <World />

      <Text>Hello</Text>
      <World />

      <Photo />
      <TextInput
        style={{borderWidth: 1, backgroundColor: '#fff', color: '#fff'}}
      />

      <BoxGreen />
      <Profile />
    </View>
  );
};

const World = () => {
  return <Text>World asdasd ytyt</Text>;
};

const Photo = () => {
  return (
    <Image
      source={{uri: 'https://placeimg.com/100/100/tech'}}
      style={{width: 100, height: 100}}
    />
  );
};

class BoxGreen extends Component {
  render() {
    return <Text>Ini component dari class</Text>;
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Image
          source={{uri: 'https://placeimg.com/100/100/animals'}}
          style={{width: 100, height: 100, borderRadius: 50}}
        />
        <Text style={{color: 'red', fontSize: 24}}>Ini Hewan</Text>
      </View>
    );
  }
}

export default SampleComponent;
// ===================================================================
/* END: Materi 1 */
// ===================================================================

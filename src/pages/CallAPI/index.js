import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Button, Image, StyleSheet, Text, View} from 'react-native';

const CallAPI = () => {
  const [dataUser, setDataUser] = useState({
    avatar: '',
    email: '',
    first_name: '',
    last_name: '',
  });

  const [postUser, setPostUser] = useState({
    name: '',
    job: '',
  });

  useEffect(() => {}, []);

  const getData = () => {
    // Get
    axios.get('https://reqres.in/api/users/2').then((res) => {
      console.log(res);
      setDataUser(res.data.data);
    });
  };

  const postData = () => {
    // Post
    const dataUser = {
      name: 'morpheus',
      job: 'leader',
    };

    axios.post('https://reqres.in/api/users', dataUser).then((res) => {
      setPostUser(res.data);
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Materi Call API </Text>

      <Button title="Get Data" onPress={getData} />
      <Text>Response GET DATA</Text>
      {dataUser.avatar.length > 0 && (
        <Image source={{uri: dataUser.avatar}} style={styles.avatar} />
      )}
      <Text>{`${dataUser.first_name} ${dataUser.last_name}`}</Text>
      <Text>{dataUser.email}</Text>
      <View style={styles.line} />

      <Button title="Post Data" onPress={postData} />
      <Text>Response POST DATA</Text>
      <Text>{postUser.name}</Text>
      <Text>{postUser.job}</Text>
    </View>
  );
};

export default CallAPI;

const styles = StyleSheet.create({
  container: {padding: 20},
  textTitle: {textAlign: 'center'},
  line: {height: 2, backgroundColor: 'black', marginVertical: 20},
  avatar: {width: 100, height: 100, borderRadius: 100},
});

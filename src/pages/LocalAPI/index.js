import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const Item = (props) => {
  const {name, email, bidang, onPress, onDelete} = props;

  return (
    <View style={styles.itemContainer}>
      <Image
        source={{uri: `https://i.pravatar.cc/150?u=${email}`}}
        style={styles.avatar}
      />
      <TouchableOpacity style={styles.desc} onPress={onPress}>
        <View>
          <Text style={styles.descName}>{name}</Text>
          <Text style={styles.descEmail}>{email}</Text>
          <Text style={styles.descBidang}>{bidang}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onDelete}>
        <Text style={styles.delete}>x</Text>
      </TouchableOpacity>
    </View>
  );
};

const LocalAPI = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bidang, setBidang] = useState('');
  const [users, setUsers] = useState([]);
  const [button, setButton] = useState('Simpan');
  const [selectedUser, setSelectedUser] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const submit = () => {
    const data = {
      name,
      email,
      bidang,
    };

    if (button === 'Simpan') {
      axios.post('http://192.168.1.5:3004/users/', data).then((res) => {
        console.log('response', res);
        setName('');
        setEmail('');
        setBidang('');
        getData();
      });
    } else if (button === 'Update') {
      axios
        .put(`http://192.168.1.5:3004/users/${selectedUser.id}`, data)
        .then((res) => {
          console.log('response Update Data', res);
          setName('');
          setEmail('');
          setBidang('');
          getData();
          setButton('Simpan');
        });
    }
  };

  const getData = () => {
    axios.get('http://192.168.1.5:3004/users/').then((res) => {
      console.log('response get Data : ', res);
      setUsers(res.data);
    });
  };

  const selectItem = (item) => {
    console.log('select', item);
    setSelectedUser(item);
    setName(item.name);
    setEmail(item.email);
    setBidang(item.bidang);
    setButton('Update');
  };

  const deleteItem = (item) => {
    console.log('delete Item ', item);
    axios.delete(`http://192.168.1.5:3004/users/${item.id}`).then((res) => {
      console.log('Response Delete Data', res);

      getData();
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Materi Local API JSON Server</Text>
      <Text>Masukan Anggota Kabayan Coding</Text>
      <TextInput
        placeholder="Nama Lengkap"
        style={styles.input}
        value={name}
        onChangeText={(value) => setName(value)}
      />
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={(value) => setEmail(value)}
      />
      <TextInput
        placeholder="Bidang"
        style={styles.input}
        value={bidang}
        onChangeText={(value) => setBidang(value)}
      />
      <Button title={button} onPress={submit} />
      <View style={styles.line} />
      {users.map((user) => {
        return (
          <Item
            key={user.id}
            name={user.name}
            email={user.email}
            bidang={user.bidang}
            onPress={() => selectItem(user)}
            onDelete={() =>
              Alert.alert(
                'Peringatan',
                'Anda yakin ingin menghapus user ini ?',
                [
                  {text: 'Tidak', onPress: () => console.log('Button Tidak')},
                  {text: 'Ya', onPress: () => deleteItem(user)},
                ],
              )
            }
          />
        );
      })}
    </View>
  );
};

export default LocalAPI;

const styles = StyleSheet.create({
  container: {padding: 20},
  textTitle: {textAlign: 'center', marginBottom: 20},
  line: {height: 2, backgroundColor: 'black', marginVertical: 20},
  input: {
    borderWidth: 1,
    marginBottom: 12,
    borderRadius: 25,
    paddingHorizontal: 18,
  },
  avatar: {width: 80, height: 80, borderRadius: 80},
  itemContainer: {flexDirection: 'row', marginBottom: 20},
  desc: {marginLeft: 20, flex: 1},
  descName: {fontSize: 24, fontWeight: 'bold'},
  descEmail: {fontSize: 18},
  descBidang: {fontSize: 14},
  delete: {fontSize: 20, fontWeight: 'bold', color: 'red'},
});

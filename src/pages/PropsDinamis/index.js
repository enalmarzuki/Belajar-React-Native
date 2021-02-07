import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

const Story = (props) => {
  return (
    <View style={{alignItems: 'center', marginHorizontal: 10}}>
      <Image
        source={{
          uri: props.gambar,
        }}
        style={{width: 70, height: 70, borderRadius: 70 / 2}}
      />
      <Text style={{maxWidth: 50, textAlign: 'center'}}>{props.judul}</Text>
    </View>
  );
};

const PropsDinamis = () => {
  return (
    <View>
      <Text>Materi Component Dinamis dengan Props</Text>

      <ScrollView horizontal>
        <View style={{flexDirection: 'row'}}>
          <Story
            judul="Youtube Channel"
            gambar="https://instagram.fupg5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/131890410_1477688385761302_8393782936841606975_n.jpg?_nc_ht=instagram.fupg5-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=WDVnd3ciUKAAX-ldHzM&tp=1&oh=4a7bbf84beba11ee15834fe98792a053&oe=60426905"
          />
          <Story
            judul="Facebook TV"
            gambar="https://instagram.fupg6-1.fna.fbcdn.net/v/t51.2885-19/s150x150/140263743_263607071860939_8538127581560821853_n.jpg?_nc_ht=instagram.fupg6-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=LGm8s201xWsAX--RWrB&tp=1&oh=6dca0f99379133bb03f78aeb9bddd62c&oe=6045ACC4"
          />
          <Story
            judul="IG TV"
            gambar="https://instagram.fupg5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/131890410_1477688385761302_8393782936841606975_n.jpg?_nc_ht=instagram.fupg5-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=WDVnd3ciUKAAX-ldHzM&tp=1&oh=4a7bbf84beba11ee15834fe98792a053&oe=60426905"
          />
          <Story
            judul="Facebook TV"
            gambar="https://instagram.fupg6-1.fna.fbcdn.net/v/t51.2885-19/s150x150/140263743_263607071860939_8538127581560821853_n.jpg?_nc_ht=instagram.fupg6-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=LGm8s201xWsAX--RWrB&tp=1&oh=6dca0f99379133bb03f78aeb9bddd62c&oe=6045ACC4"
          />
          <Story
            judul="IG TV"
            gambar="https://instagram.fupg5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/131890410_1477688385761302_8393782936841606975_n.jpg?_nc_ht=instagram.fupg5-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=WDVnd3ciUKAAX-ldHzM&tp=1&oh=4a7bbf84beba11ee15834fe98792a053&oe=60426905"
          />
          <Story
            judul="Facebook TV"
            gambar="https://instagram.fupg6-1.fna.fbcdn.net/v/t51.2885-19/s150x150/140263743_263607071860939_8538127581560821853_n.jpg?_nc_ht=instagram.fupg6-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=LGm8s201xWsAX--RWrB&tp=1&oh=6dca0f99379133bb03f78aeb9bddd62c&oe=6045ACC4"
          />
          <Story
            judul="IG TV"
            gambar="https://instagram.fupg5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/131890410_1477688385761302_8393782936841606975_n.jpg?_nc_ht=instagram.fupg5-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=WDVnd3ciUKAAX-ldHzM&tp=1&oh=4a7bbf84beba11ee15834fe98792a053&oe=60426905"
          />
          <Story
            judul="Facebook TV"
            gambar="https://instagram.fupg6-1.fna.fbcdn.net/v/t51.2885-19/s150x150/140263743_263607071860939_8538127581560821853_n.jpg?_nc_ht=instagram.fupg6-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=LGm8s201xWsAX--RWrB&tp=1&oh=6dca0f99379133bb03f78aeb9bddd62c&oe=6045ACC4"
          />
          <Story
            judul="IG TV"
            gambar="https://instagram.fupg5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/131890410_1477688385761302_8393782936841606975_n.jpg?_nc_ht=instagram.fupg5-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=WDVnd3ciUKAAX-ldHzM&tp=1&oh=4a7bbf84beba11ee15834fe98792a053&oe=60426905"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default PropsDinamis;

const styles = StyleSheet.create({});

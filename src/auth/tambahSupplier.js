import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Modal,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default class RegisterMember extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      token: '',
      nama: '',
      alamat: '',
      telepon: '',
      loading: false,
    };
  }

  daftar = () => {
    const {nama, alamat, telepon} = this.state;
    const url = 'https://master-of-sale.herokuapp.com/api/supplier';
    this.setState({loading: true});

    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.state.token}`,
      },
      body: JSON.stringify({
        nama: nama,
        alamat: alamat,
        telepon: telepon,
      }),
    })
      .then((res) => res.json())
      .then((resjson) => {
        console.log('ini resjsonnya', resjson.data);
        if (resjson.status === 'success') {
          this.setState({data: resjson.data, loading: false});
          Alert.alert(
            'Berhasil',
            `Nama: ${this.state.data.nama}` +
              `\nEmail: ${this.state.data.alamat}` +
              //   `\nKode Member: ${this.state.data.kode_member}` +
              `\nEmail: ${this.state.data.telepon}`,
            [
              {
                text: 'OK',
                onPress: () => console.log('OK Pressed'),
                style: 'cancel',
              },
            ],
          );

          this.props.navigation.replace('staff');
        } else {
          console.log('ini json ', resjson.data);
          this.setState({loading: false});
          alert('Gagal Mendaftar Supplier');
        }
      })
      .catch((error) => {
        console.log('ini error ', error);
        alert('Ada Kesalahan Server');
        this.setState({loading: false});
      });
  };

  componentDidMount() {
    AsyncStorage.getItem('token').then((token) => {
      if (token != null) {
        this.setState({token: token});
      } else {
        console.log('gak ada token');
      }
    });
  }

  loading = () => {
    this.setState({loading: true});
  };
  render() {
    return (
      <View style={styles.utama}>
        {/* modal loading */}
        <Modal
          transparent={true}
          animationType="slide"
          visible={this.state.loading}
          onRequestClose={() => this.setState({loading: false})}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#0000008c',
            }}>
            <View
              style={{
                flexDirection: 'row',
                height: 100,
                backgroundColor: 'white',
                alignItems: 'center',
              }}>
              <ActivityIndicator size={50} color="black" style={{margin: 10}} />
              <Text style={{margin: 10, fontWeight: 'bold'}}>
                Data Sedang di Proses . . .
              </Text>
            </View>
          </View>
        </Modal>

        <View style={styles.br}>
          <ScrollView>
            <View style={{alignItems: 'center', marginBottom: 10}}>
              <Text style={{fontWeight: 'bold'}}> Master of Cash </Text>
              <Text style={{fontWeight: 'bold'}}> Tambah Supplier </Text>
            </View>

            <View style={{width: '100%', marginVertical: 15}}>
              <Text style={{fontWeight: 'bold'}}> Nama Supplier </Text>

              <TextInput
                placeholder="Perusahaan"
                underlineColorAndroid="black"
                value={this.state.nama}
                onChangeText={(t) => this.setState({nama: t})}
              />

              <Text style={{fontWeight: 'bold'}}> Alamat </Text>

              <TextInput
                placeholder="Alamat"
                underlineColorAndroid="black"
                value={this.state.alamat}
                onChangeText={(t) => this.setState({alamat: t})}
              />

              <Text style={{fontWeight: 'bold'}}> Telepon </Text>

              <TextInput
                placeholder="Telepon"
                underlineColorAndroid="black"
                value={this.state.telepon}
                onChangeText={(t) => this.setState({telepon: t})}
              />
            </View>

            <TouchableOpacity onPress={() => this.daftar()} style={styles.tr}>
              <Text style={{fontWeight: 'bold', color: 'white'}}>
                Add Supplier
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  utama: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'deepskyblue',
  },
  br: {
    width: 330,
    height: 500,
    backgroundColor: 'white',
    padding: 5,
    elevation: 5,
    borderRadius: 15,
  },
  tr: {
    height: 50,
    margin: 5,
    alignItems: 'center',
    borderRadius: 20,
    justifyContent: 'center',
    backgroundColor: 'black',
    elevation: 3,
  },
});

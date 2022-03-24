import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

const Header = () => {
  const [Search, setSearch] = useState('');

  return (
    <View style={styles.header}>
      <View style={styles.inputSearch}>
        <TextInput
        style={{width:'100%'}}
          onChangeText={(text) => setSearch(text)}
          value={Search}
          placeholder="Cari layanan, makanan & tujuan"
        />
      </View>
      <View style={styles.profile} >
        <Text>P</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    backgroundColor: '#00AA13',
    height: 60,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    zIndex:10
  },
  inputSearch: {
    borderRadius: 30,
    backgroundColor: 'white',
    width:'85%',
    height:40,
  },
  profile: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: 'white'
  }
})

export default Header;

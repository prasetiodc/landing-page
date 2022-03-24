import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';

const GomartPromo = () => {
  return (
    <View style={styles.mart1}>
      <View style={styles.mart1Title}>
        <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 17, marginBottom: 3 }}>gomart</Text>
        <Text style={{ fontWeight: 'bold', color: 'black', marginBottom: 3 }}>Gampang belanja dari berbagai merchant GoMart!</Text>
        <Text style={{ fontSize: 12, marginBottom: 3 }}>Lengkapi kebutuhan pokok kamu dengan berbagai macam promo + gratis ongkir setiap hari</Text>
      </View>

      <ScrollView style={styles.containerCardGomart} horizontal={true} showsHorizontalScrollIndicator={false}>
        {
          [53, 54, 40, 20, 20, 20, 10, 10].map((el, index) =>
            <View style={styles.cardGomart} key={`gomart-${index}`}>
              <View style={styles.imageGomart} />
              <View style={styles.descCard}>
                <Text style={{ fontWeight: 'bold', color: 'black' }}>Diskon s/d {el}%</Text>
              </View>
            </View>
          )
        }
      </ScrollView>

      <View style={styles.containerCardGomart}>
        <View style={styles.cardGomartBig}>
          <View style={styles.imageGomartBig} />
          <View style={styles.descCard}>
            <Text style={{ fontWeight: 'bold', color: 'black' }}>Yang lapar mana suaranya? Mari merapat~</Text>
            <Text style={{ fontSize: 13 }} >Cek #REKOMENDASIK dari GoFood yang cocok buat makan siangmu. klik!</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mart1Title: {
    paddingHorizontal: 20,
  },
  containerCardGomart: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20
  },
  cardGomart: {
    backgroundColor: 'white',
    borderRadius: 15,
    elevation: 5,
    shadowColor: '#52006A',
    width: 150,
    marginRight: 30,
    marginVertical: 10
  },
  imageGomart: {
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    backgroundColor: '#ff6666',
    height: 150
  },
  descCard: {
    padding: 15
  },
  cardGomartBig: {
    backgroundColor: 'white',
    borderRadius: 15,
    elevation: 5,
    shadowColor: '#52006A',
    width: '100%',
    marginRight: 30,
    marginVertical: 10
  },
  imageGomartBig: {
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    backgroundColor: '#ff6666',
    height: 150
  },
})

export default GomartPromo;

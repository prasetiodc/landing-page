import React from 'react';
import { View, StyleSheet, Text, Dimensions, ScrollView } from 'react-native';
const { width } = Dimensions.get('window');

const Gopaypromo2 = () => {
  return (
    <>
      <View style={styles.gopayTitle}>
        <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 17, marginBottom: 3 }}>gopay</Text>
        <Text style={{ fontWeight: 'bold', color: 'black', marginBottom: 3 }}>Bikin pengeluaran jadi irit</Text>
        <Text style={{ fontSize: 12, marginBottom: 3 }}>Buruan dapetin sebelum kebahisan!</Text>
      </View>

      <ScrollView style={styles.containerCardGopay} horizontal={true} showsHorizontalScrollIndicator={false}>
        {
          [1, 2].map(el =>
            <View style={styles.cardGopay} key={`gopay-${el}`}>
              <View style={styles.imageGopay} />
            </View>
          )
        }
      </ScrollView>

      <View style={styles.containerCardGopay}>

        <View style={styles.cardGomart}>
          <View style={styles.imageGomart} />
          <View style={styles.descCard}>
            <Text style={{ fontWeight: 'bold', color: 'black' }}>Pasti Ada Promo GoFood!</Text>
            <Text style={{ fontSize: 13 }} >Dapetin potongan sampai Rp130.000 + diskon ongkir buat pesan beragam menu yang kamu suka. Order sekarang!</Text>
          </View>
        </View>

        <View style={styles.cardGomart}>
          <View style={styles.imageGomart} />
          <View style={styles.descCard}>
            <Text style={{ fontWeight: 'bold', color: 'black' }}>Bisa belanja sambil ngapain aja</Text>
            <Text style={{ fontSize: 13 }} >Pesen ini-itu dari GoMart, kamu tinggal tunggu belanjaan sampe dengan cepat. Klik buat order & nikmati gratis ongkirnya!</Text>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  gopayTitle: {
    paddingHorizontal: 20,
  },
  containerCardGopay: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20
  },
  cardGopay: {
    backgroundColor: 'white',
    borderRadius: 15,
    elevation: 5,
    shadowColor: '#52006A',
    width: (width * 0.87),
    marginRight: 30,
    marginVertical: 10
  },
  cardGomart: {
    backgroundColor: 'white',
    borderRadius: 15,
    elevation: 5,
    shadowColor: '#52006A',
    width: '100%',
    marginRight: 30,
    marginVertical: 10
  },
  imageGopay: {
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    backgroundColor: '#87CEEB',
    height: 150
  },
  imageGomart: {
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    backgroundColor: '#ff6666',
    height: 150
  },
  descCard: {
    padding: 15
  }
})

export default Gopaypromo2;

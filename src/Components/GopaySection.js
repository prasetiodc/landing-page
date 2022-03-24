import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Gopaysection = () => {
  return (
    <View style={styles.gopaySection}>
      <View style={styles.gopayRp}>
        <Text style={styles.textGopayBold}>gopay</Text>
        <Text style={styles.textGopayBold}>Rp 123.456</Text>
        <Text style={styles.klikGopay}>Klik & cek riwayat</Text>
      </View>

      <View style={styles.containerIconGopaySection}>
        <View style={styles.iconGopaySection} />
        <Text style={styles.textIconGopaySection}>Bayar</Text>
      </View>

      <View style={styles.containerIconGopaySection}>
        <View style={styles.iconGopaySection} />
        <Text style={styles.textIconGopaySection}>Isi Saldo</Text>
      </View>

      <View style={styles.containerIconGopaySection}>
        <View style={styles.iconGopaySection} />
        <Text style={styles.textIconGopaySection}>Eksplor</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  gopaySection: {
    marginTop: 80,
    flexDirection: 'row',
    backgroundColor: '#4682B4',
    justifyContent: 'space-around',
    margin: 20,
    padding: 10,
    borderRadius: 10
  },
  gopayRp: {
    backgroundColor: 'white',
    width: '40%',
    padding: 10,
    borderRadius: 10
  },
  textGopayBold: {
    color: 'black',
    fontWeight: '900'
  },
  klikGopay: {
    color: 'green',
    fontSize: 12
  },
  containerIconGopaySection: {
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white'
  },
  iconGopaySection: {
    backgroundColor: 'white',
    borderRadius: 5,
    width: 30,
    height: 30
  },
  textIconGopaySection: {
    color: 'white',
    fontSize: 13
  }
})

export default Gopaysection;

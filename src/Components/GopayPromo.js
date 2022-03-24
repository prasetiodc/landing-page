import React from 'react';
import { View, StyleSheet, Text, Dimensions, ScrollView } from 'react-native';
const { width } = Dimensions.get('window');

const Gopaypromo = () => {
  return (
    <>
      <View style={styles.gopay1Title}>
        <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 17, marginBottom:3 }}>gopay</Text>
        <Text style={{ fontWeight: 'bold', color: 'black', marginBottom:3 }}>Bonus Berkali Lipat</Text>
        <Text style={{ fontSize: 12, marginBottom:3 }}>GoPay Coins Rp100K plus Bunga Rp174K*  </Text>
      </View>

      <ScrollView style={styles.containerCardGopay} horizontal={true} showsHorizontalScrollIndicator={false}>
        {
          [1, 2].map(el =>
            <View style={styles.cardGopay} key={`gopay-${el}`}>
              <View style={styles.imageGopay} />
              <View style={styles.descCard}>
                <Text style={{ fontWeight: 'bold', color: 'black' }}>Gopay Coins Rp100K Untukmu</Text>
                <Text style={{ fontSize: 13 }} >Bayar dengan GoPay Jago dan dapatkan bonus untuk belanja di Tokopedia</Text>
              </View>
            </View>
          )
        }
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  gopay1Title: {
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
  imageGopay: {
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    backgroundColor: '#87CEEB',
    height: 150
  },
  descCard: {
    padding: 15
  }
})

export default Gopaypromo;

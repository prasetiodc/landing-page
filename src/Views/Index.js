import React from 'react';
import { View, StyleSheet, Text, ScrollView, SafeAreaView } from 'react-native';
import GomartPromo from '../Components/GomartPromo';
import Gopaypromo1 from '../Components/GopayPromo';
import Gopaypromo2 from '../Components/GopayPromo2';
import Gopaysection from '../Components/GopaySection';
import Header from '../Components/Header';
import Menusection from '../Components/MenuSection';

const Index = () => {

  return (
    <SafeAreaView style={styles.main}>
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <Gopaysection />
        <Menusection />
        <Gopaypromo1 />
        <Gopaypromo2 />
        <GomartPromo />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    position: 'relative'
  },

})

export default Index;





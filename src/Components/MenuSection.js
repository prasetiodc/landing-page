import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Menusection = () => {
  const menus = [
    { title: 'GoRide', color: '#90EE90' },
    { title: 'GoCar', color: '#90EE90' },
    { title: 'GoFood', color: '#ff6666' },
    { title: 'GoSend', color: '#90EE90' },
    { title: 'GoMart', color: '#ff6666' },
    { title: 'GoPulsa', color: '#89CFF0' },
    { title: 'Check in', color: '#89CFF0' },
    { title: 'Lainnya', color: 'gray' },
  ]

  return (
    <View style={styles.menuSection}>
      {
        menus.map((menu, index) =>
          <View key={`menu-${index}`} style={styles.containerMenu}>
            <View style={[styles.iconMenu, { backgroundColor: menu.color }]} />
            <Text>{menu.title}</Text>
          </View>
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  menuSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  containerMenu: {
    width: 75,
    alignItems: 'center',
    margin: 10
  },
  iconMenu: {
    width: 50,
    height: 50,
    borderRadius: 10
  }
})

export default Menusection;

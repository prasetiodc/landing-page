/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Suspense, lazy } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  SafeAreaView,
  StyleSheet,
  Image
} from 'react-native';

import HomeIcon from './src/assets/home.png';
import HomeSelectedIcon from './src/assets/homeSelected.png';
import PromoIcon from './src/assets/discount.png';
import PromoSelectedIcon from './src/assets/discountSelected.png';
import OrderIcon from './src/assets/order.png';
import OrderSelectedIcon from './src/assets/orderSelected.png';
import ChatIcon from './src/assets/chat.png';
import ChatSelectedIcon from './src/assets/chatSelected.png';

const Home = lazy(() => import('./src/Views/Index'));
const Promo = lazy(() => import('./src/Views/Promo'));
const Order = lazy(() => import('./src/Views/Order'));
const Chat = lazy(() => import('./src/Views/Chat'));

const Tab = createBottomTabNavigator()
function App() {
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <Suspense fallback={<></>}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                  iconName = focused
                    ? HomeSelectedIcon
                    : HomeIcon
                } else if (route.name === 'Promo') {
                  iconName = focused
                    ? PromoSelectedIcon
                    : PromoIcon
                } else if (route.name === 'Order') {
                  iconName = focused
                    ? OrderSelectedIcon
                    : OrderIcon
                } else if (route.name === 'Chat') {
                  iconName = focused
                    ? ChatSelectedIcon
                    : ChatIcon
                }

                return <Image source={iconName} style={{
                  width: 25,
                  height: 25
                }} />
              },
              tabBarActiveTintColor: '#00AA13',
            })}
            >
            <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Tab.Screen name="Promo" component={Promo} />
            <Tab.Screen name="Order" component={Order} />
            <Tab.Screen name="Chat" component={Chat} />
          </Tab.Navigator>
        </NavigationContainer>
      </Suspense>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1
  },
});

export default App;

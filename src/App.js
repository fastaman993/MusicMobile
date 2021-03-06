/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Root} from 'native-base';

import Category from './container/Category';
import ProductList from './container/ProductList';
import Detail from './container/Detail';
import Wishlist from './container/Wishlist';
import CartContainer from './container/CartContainer';
import Sign from './container/Sign';
import Login from './container/Login';
import Register from './container/Register';

import store from './public/redux/store';
import {Provider} from 'react-redux';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Category,
    navigationOptions: () => ({
      header: null,
    }),
  },
  List: {
    screen: ProductList,
    navigationOptions: () => ({
      header: null,
    }),
  },
  Detail: {
    screen: Detail,
    navigationOptions: () => ({
      header: null,
    }),
  },
  Wishlist: {
    screen: Wishlist,
    navigationOptions: () => ({
      header: null,
    }),
  },
  Cart: {
    screen: CartContainer,
    navigationOptions: () => ({
      header: null,
    }),
  },
  Sign: {
    screen: Sign,
    navigationOptions: () => ({
      header: null,
    }),
  },
  Login: {
    screen: Login,
    navigationOptions: () => ({
      header: null,
    }),
  },
  Register: {
    screen: Register,
    navigationOptions: () => ({
      header: null,
    }),
  },
  defaultNavigationOptions: {
    screen: Category,
    navigationOptions: () => ({
      header: null,
    }),
  },
});

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  return (
    <Root>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </Root>
  );
};

export default App;

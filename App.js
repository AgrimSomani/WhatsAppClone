import React from 'react';
import Router from './navigation/Router';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import 'react-native-gesture-handler'

const App = () => {
  return (
    <Router/>
  );
};

export default App;

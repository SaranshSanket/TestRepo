/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import { LoginManager } from "react-native-fbsdk";
import StartNav from './src/navigation/AppNavigation'


export default class App extends Component {
  
  
  render() {
    return ( 
	<StartNav/>
    );
  }
}


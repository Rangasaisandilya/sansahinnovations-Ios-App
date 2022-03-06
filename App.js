/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View, Text } from 'react-native';
import ImagesExample from './src/components/companylogo';
import { WebView } from 'react-native-webview';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, createAppContainer } from 'react-navigation';  
import Navigate from './src/components/Navigate';



export default function App(){
  return(
    <View style={{flex:1}}>
      <Navigate/>
      </View>
  )
}
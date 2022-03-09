/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import ImagesExample from './companylogo';
import { WebView } from 'react-native-webview';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import ScrollViewCommands from 'react-native/Libraries/Components/ScrollView/ScrollViewCommands';

export class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null,
  });
  constructor(props) {
    super(props);
    this.state = {};
  }
  onPressON() {
    fetch('http://192.168.168.50/4/off', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        if (responseJson.status == 500) {
          Alert.alert('could not complete operation try again later');
        } else {
          Alert.alert('success');
        }
      });
  }
  onPressOFF() {
    fetch('http://192.168.168.50/4/on', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        if (responseJson.status == 500) {
          Alert.alert('could not complete opeartion try again later');
        } else {
          Alert.alert('success');
        }
      });
  }
  render(navigation) {
    return (
      <ScrollView style={styles.scrollstyles}>
      <><ImagesExample />
          <View style={styles.container}>

            <View style={styles.first}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Hall')}>
                <View style={styles.buttonContainer} >
                  <Text style={styles.name}>Hall</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Dining')}>
                <View style={styles.buttonContainer} >
                  <Text style={styles.name}>Dining Hall</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.first}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Kitchen')}>
                <View style={styles.buttonContainer} >
                  <Text style={styles.name}>Kitchen</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Master Bedroom')}>
                <View style={styles.buttonContainer} >
                  <Text style={styles.name}>Master Bedroom</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.first}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Children Bedroom')}>
                <View style={styles.buttonContainer} >
                  <Text style={styles.name}>Children Bedroom</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Guest Room')}>
                <View style={styles.buttonContainer} >
                  <Text style={styles.name}>Guest Room</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.first}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Dining')}>
                <View style={styles.buttonContainer} >
                  <Text style={styles.name}>extra button1</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Dining')}>
                <View style={styles.buttonContainer} >
                  <Text style={styles.name}>extra button 2</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
      </>
      </ScrollView>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  scrollstyles: {
    flex: 1
  },
  first: {
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  container: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    marginTop: '0%',
  },
  container1: {
    flexDirection: 'column'
  },
  buttonContainer: {
    margin: 20,
    backgroundColor: '#bfbfbf',
    width: 150,
    height: 150,
    justifyContent: 'center'
  },
  multiButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  name: {
    color: 'black',
    fontSize: 27,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  name1: {
    color: 'black',
    paddingLeft: 40,
    fontSize: 27
  },
  diningbutton: {
    color: 'black'
  }
})  
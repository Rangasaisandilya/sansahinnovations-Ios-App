/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View, Text ,TouchableOpacity} from 'react-native';
import ImagesExample from './companylogo';
import { WebView } from 'react-native-webview';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, createAppContainer } from 'react-navigation';  

export class Home extends Component {
    static navigationOptions = ({navigation})=>({
        header:null,
    });
    constructor(props){
        super(props);
        this.state={};
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
      <><ImagesExample />
      <View style={styles.container}>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Hall')}>
          <View style={styles.buttonContainer} >
          <Text style={styles.name}>Hall</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Dining')}>
          <View style={styles.buttonContainer} >
          <Text style={styles.name}>Dining</Text>
        </View>
        </TouchableOpacity>

        
      </View></>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
      justifyContent:'space-evenly',
    flexDirection:'row',
    marginTop:'20%',
  },
  buttonContainer: {
    margin: 20,
    backgroundColor:'#bfbfbf',
    width:150,
    height:150,
    justifyContent:'center'
  },
  multiButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  name:{
      color:'black',
      fontSize:27,
      textAlign:'center',
      fontWeight:'bold'
  },
  name1:{
    color:'black',
    paddingLeft:40,
    fontSize:27
  },
  diningbutton:{
      color:'black'
  }
})  
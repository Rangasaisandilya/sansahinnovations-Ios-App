import React, { Component } from 'react'  
import {  
    View,StyleSheet,AppRegistry  
} from 'react-native'  ;
import { WebView } from 'react-native-webview';

  
export class Dining extends Component {  
    render() {  
        return (  
        <View style = {styles.container}>  
           <WebView source={{ uri: 'https://flipkart.com/' }} />
        </View>  
        )  
    }  
}  
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
    }  
})  

export default Dining;
   
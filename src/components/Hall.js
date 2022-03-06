import React, { Component } from 'react'  
import {  
    View,StyleSheet,AppRegistry  
} from 'react-native'  ;
import { WebView } from 'react-native-webview';

  
export class Hall extends Component {  
    render() {  
        return (  
        <View style = {styles.container}>  
           <WebView source={{ uri: 'https://amazon.com/' }} />
        </View>  
        )  
    }  
}  
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
    }  
})  

export default Hall;
   
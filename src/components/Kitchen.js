import React, { Component } from 'react'
import {
    View, StyleSheet, AppRegistry,Text
} from 'react-native';
import { WebView } from 'react-native-webview';


export class Kitchen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Kitchen</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default Kitchen;

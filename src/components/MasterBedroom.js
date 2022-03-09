import React, { Component } from 'react'
import {
    View, StyleSheet, AppRegistry,Text
} from 'react-native';
import { WebView } from 'react-native-webview';


export class MasterBedRoom extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>MasterBedRoom</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default MasterBedRoom;

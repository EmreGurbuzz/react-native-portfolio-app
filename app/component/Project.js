import { Text, View, Image, ActivityIndicator, Linking, TouchableOpacity, ScrollView } from 'react-native'
import React, { Component } from 'react'
import axios from 'axios'
import { SafeAreaView } from 'react-native-safe-area-context'
export class App extends Component {
    state = {
        isOpened: false,
    }

    render() {
        return (
            <TouchableOpacity onPress={() => this.setState({ isOpened: !this.state.isOpened })}>
                <Text style={{ fontWeight: '700', fontSize: 40 }}>{this.state.isOpened ? "-" : "+"} {this.props.item.TITLE}</Text>
                {this.state.isOpened &&
                    <View>
                        <Image style={{ alignSelf: 'center', width: 200, height: 150, borderRadius: 10,resizeMode:'contain' }} source={{ uri: this.props.item.IMAGE_URI }} />
                        <Text style={{ fontWeight: '500', fontSize: 15,marginTop:'5%' }}>  {this.props.item.CONTENT}</Text>
                    </View>
                }
            </TouchableOpacity>
        )
    }
}

export default App
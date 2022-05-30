import { Text, View, Image, ActivityIndicator, Linking, TouchableOpacity, ScrollView } from 'react-native'
import React, { Component } from 'react'
import axios from 'axios'
import { SafeAreaView } from 'react-native-safe-area-context'
import Interest from '../component/Interest'
export class App extends Component {
  state = {
    INTEREST: [],
    loading: true,
    isOpened: false,
  }
  async getInterest() {
    response = await axios.get("https://mynode.emregurbuz.net/INTEREST")
    this.setState({ INTEREST: response.data, loading: false })

  }
  componentDidMount() {
    this.getInterest()
  }
  render() {
    console.log("INTEREST GELDI :" + JSON.stringify(this.state.INTEREST, null, 2))
    if (this.state.loading) {
      return (
        <View style={{ flex: 1, alignSelf: 'center', justifyContent: 'center' }}>
          <ActivityIndicator style={{ transform: [{ scale: 2 }] }} size={'large'} color={'black'} />
          <Text style={{ marginTop: '20%', fontWeight: '600', fontSize: 20 }}>Bilgiler Getiriliyor..</Text>
        </View>
      )
    }
    else {

      return (
        <ScrollView style={{ flex: 1 }}>
          <SafeAreaView style={{ padding: 10, flex: 1 }}>
            {this.state.INTEREST.map(item =>
              <Interest item={item} />
              )}
          </SafeAreaView>
        </ScrollView>
      )
    }
  }
}

export default App
import { Text, View, Image, ActivityIndicator, Linking, TouchableOpacity, ScrollView } from 'react-native'
import React, { Component } from 'react'
import axios from 'axios'
import { SafeAreaView } from 'react-native-safe-area-context'
export class App extends Component {
  state = {
    ABOUT: [],
    loading: true
  }
  async getAbout() {
    response = await axios.get("https://mynode.emregurbuz.net/ABOUT")
    this.setState({ ABOUT: response.data[0], loading: false })

  }
  componentDidMount() {
    this.getAbout()
  }
  render() {
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
            <Image style={{ height: 200, width: 200, borderRadius: 20, resizeMode: 'contain', alignSelf: 'center' }} source={{ uri: this.state.ABOUT?.IMAGE_URI }} />
            <Text style={{ alignSelf: 'center', marginVertical: 10, fontSize: 17, fontWeight: '600' }}>{this.state.ABOUT?.NAME + " " + this.state.ABOUT?.SURNAME} </Text>
            <View style={{ alignSelf: 'center' }}>
              <TouchableOpacity onPress={() => Linking.openURL(this.state.ABOUT?.GITHUB)} style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image style={{ width: 50, height: 50, resizeMode: 'contain' }} source={require('../assets/github.png')} />
                <Text>{this.state.ABOUT.GITHUB}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL(this.state.ABOUT?.LINKEDIN)} style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image style={{ width: 50, height: 50, resizeMode: 'contain' }} source={require('../assets/linkedin.png')} />
                <Text>{this.state.ABOUT.LINKEDIN}</Text>
              </TouchableOpacity>
            </View>
            <Text style={{ textDecorationLine: 'underline', fontWeight: '600', fontSize: 17, marginVertical: 3, alignSelf: 'center' }}>HAKKIMDA</Text>
            <Text style={{}}>  {this.state.ABOUT?.BIO} </Text>
          </SafeAreaView>
        </ScrollView>
      )
    }
  }
}

export default App
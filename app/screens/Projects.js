import { Text, View, Image, ActivityIndicator, Linking, TouchableOpacity, ScrollView } from 'react-native'
import React, { Component } from 'react'
import axios from 'axios'
import { SafeAreaView } from 'react-native-safe-area-context'
import Project from '../component/Project'
export class App extends Component {
  state = {
    PROJECTS: [],
    loading: true,
    isOpened: false,
  }
  async getProjects() {
    response = await axios.get("https://mynode.emregurbuz.net/PROJECTS")
    this.setState({ PROJECTS: response.data, loading: false })

  }
  componentDidMount() {
    this.getProjects()
  }
  render() {
    console.log("INTEREST GELDI :" + JSON.stringify(this.state.PROJECTS, null, 2))
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
            {this.state.PROJECTS.map(item =>
              <Project item={item} />
              )}
          </SafeAreaView>
        </ScrollView>
      )
    }
  }
}

export default App
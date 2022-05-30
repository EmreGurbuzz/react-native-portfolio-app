import { Text, View,Image } from 'react-native'
import React, { Component } from 'react'
import axios from 'axios'
import { SafeAreaView } from 'react-native-safe-area-context'
export class App extends Component {
  state={
    ABOUT:[]
  }
  async getAbout(){
    response = await axios.get("https://mynode.emregurbuz.net/ABOUT")
    console.log("gelen response "+JSON.stringify(response.data,null,2))
  }
  componentDidMount() { 
    this.getAbout()
   }
  render() {
    return (
      <SafeAreaView>
        <Text>App</Text>
      </SafeAreaView>
    )
  }
}

export default App
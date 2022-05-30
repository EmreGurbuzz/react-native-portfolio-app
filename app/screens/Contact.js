import { Text, View, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import DeviceInfo from 'react-native-device-info'
import axios from 'axios'
export class App extends Component {

  async sendMessage() {
    if (this.state.name.length == 0 || this.state.contactAddress.length == 0 || this.state.message.length == 0) {
      this.setState({
        errorMessage: "Girilecek alanlar boş olamaz.",
        error: true
      })
    }
    else {
      try {
        this.setState({ sending: true })
        response = await axios.get('https://mynode.emregurbuz.net/CONTACT', {
          NAME: this.state.name,
          CONTACT_ADDRESS: this.state.contactAddress,
          MESSAGE: this.state.message,
          DEVICE_INFO: DeviceInfo.getDeviceId()
        })
        if (response.data == "success") {
          this.setState({ success: true })
        }
        console.group("dönen yanıt :" + JSON.stringify(response.data, null, 2))
      } catch (error) {
        console.log("catch :" + JSON.stringify(error))
      }
      finally {
        this.setState({ sending: false })
      }


    }
  }
  state = {
    name: '',
    contactAddress: '',
    message: '',
    sending: false,
    success: false,
    error: false
  }
  render() {
    return (
      <SafeAreaView>
        <Text style={{ alignSelf: 'center', fontWeight: '600', alignSelf: 'center', fontSize: 30 }}>Bana mesaj yaz</Text>
        <TextInput onChangeText={name => this.setState({ name })} placeholder='Adın' placeholderTextColor={'gray'} style={{ borderWidth: 1, width: '80%', padding: 10, textAlign: 'center', alignSelf: 'center', fontWeight: '700', fontSize: 16, borderRadius: 5, borderStyle: 'dashed', marginTop: '15%' }} />
        <TextInput onChangeText={contactAddress => this.setState({ contactAddress })} placeholder='İletişim adresin' placeholderTextColor={'gray'} style={{ borderWidth: 1, width: '80%', padding: 10, textAlign: 'center', fontWeight: '700', fontSize: 16, alignSelf: 'center', borderRadius: 5, borderStyle: 'dashed', marginTop: '5%' }} />
        <TextInput onChangeText={message => this.setState({ message })} multiline placeholder='Mesajın' placeholderTextColor={'gray'} style={{ height: '30%', borderWidth: 1, width: '80%', padding: 10, textAlign: 'center', fontWeight: '700', fontSize: 16, alignSelf: 'center', borderRadius: 5, borderStyle: 'dashed', marginTop: '5%' }} />
        <TouchableOpacity disabled={this.state.sending} onPress={() => this.sendMessage()} style={{ padding: 10, width: '80%', marginTop: '5%', height: 50, alignSelf: 'center', borderRadius: 5, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', opacity: .9 }}>
          {this.state.sending ?
            <ActivityIndicator color={'white'} />:
            <Text style={{ color: 'white', fontSize: 15, fontWeight: '700', }}>Mesajımı ilet</Text>}
        </TouchableOpacity>
        {this.state.success && <Text style={{ textAlign: 'center' }}> İşlem başarılı </Text>}
      </SafeAreaView>
    )
  }
}

export default App
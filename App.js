import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {PESDK} from 'react-native-photoeditorsdk';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
      }}>
      <TouchableOpacity
        onPress={() => {
          PESDK.openEditor(
            (source = {
              uri: 'https://3.img-dpreview.com/files/p/TS600x450~sample_galleries/3002635523/4971879462.jpg',
            }),
          );
        }}
        style={{
          height: '5%',
          width: '30%',
          backgroundColor: 'yellow',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 15,
        }}>
        <Text style={{color: 'black', fontWeight: '600'}}>Choose Photo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

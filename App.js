// navigation 路由使用

import * as React from 'react';
import { View, Text, Button, NativeModules, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function custom() {
  NativeModules.ToastExample.show(NativeModules.WallpaperModule.showMyName() + '??', NativeModules.ToastExample.SHORT)
}
const image = `data:image/png;base64,${NativeModules.WallpaperModule.showMyName()}`
function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ImageBackground source={{uri:image}} style={{width: '100%', height:'100%' }}>
        <Text>图片背景框</Text>
      </ImageBackground>
    </View>
  );
}

function Details() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>这是Details页面{NativeModules.WallpaperModule.showMyName()}22</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
// navigation 路由使用

import * as React from 'react';
import { View, Text, Button, NativeModules, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function custom() {
  NativeModules.ToastExample.show(NativeModules.WallpaperModule.showMyName() + '??', NativeModules.ToastExample.SHORT)
}
const image = `data:image/png;base64,${NativeModules.WallpaperModule.showMyName()}`
function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text onPress={() => custom()}>首页</Text>
      <Button title='跳转详情按钮' onPress={() => navigation.navigate('Details')}></Button>
      <Image source={{uri:image}} style={{width: 200, height:300 }} />
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
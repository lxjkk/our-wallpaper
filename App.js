// navigation 路由使用

import React, {useState} from 'react';
import { View, Text, Button, NativeModules, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Mbutton from './components/Button';
import setPage from './pages/set';

function custom() {
  NativeModules.ToastExample.show(NativeModules.WallpaperModule.getHomeWallpaper() + '??', NativeModules.ToastExample.SHORT)
}

const image = `data:image/png;base64,${NativeModules.WallpaperModule.getHomeWallpaper()}`
function HomeScreen({navigation}) {
  let [count, setCount] = useState(0)
  function open () {
    //打开系统相册
    launchImageLibrary({}, (response)  => {
    //响应结果处理参考上面样例
    console.log(response);
    if (!response.assets) return 
    setCount(response.assets[0].uri)
    const uri = response.assets[0].uri.replace('file://','')
    NativeModules.WallpaperModule.setHomeWallpaper(uri)
    NativeModules.ToastExample.show(JSON.stringify(response), 999)
  });
}
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ImageBackground source={{uri: count.assets && count.assets[0].uri || image}} style={{width: '100%', height:'100%' }}>
        <View style={{width: 200}}>
        <Text style={{color: '#fff'}} onPress={() => navigation.navigate('Details')}>{count}</Text>
        </View>
        {/* <Button title='这是一个原生按钮'/> */}
      </ImageBackground>
      <View style={{position:'absolute',bottom:20, overflow: 'hidden'}}>
      <Mbutton title="+" style={{width: 40, height: 40, borderRadius: 20}} onPress={() => open()}></Mbutton>
      {/* <Button title='+'/> */}
      </View>
    </View>
  );
}

function Details() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>这是Details页面</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="setPage" component={setPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
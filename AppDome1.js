import React from "react";
import {View, Text, Dimensions, TouchableOpacity, Image, ImageBackground, TextInput} from 'react-native'
// import RNWalle from 'react-native-wallpaper'
/**
 * 1 rn 默认布局方式flex
 * 2 布局方向 css default flexDirection: column
 * 3 rn 中样式没有继承 （uniapp nvue一样）
 * 4 单位 不要使用px vw vh等像素单位 但是可以使用百分比 "50%"
 * 
 * 1 设备屏幕的宽高练习
 * 2 可点击的view区域
 * 3 image使用 （GIF等其他图片需要配置）
 *    1 ImageBackground标签使用图片单当背景的容器
 * 4 输入框 TextInput
*/
const screenWidth = Math.round(Dimensions.get('window').width)
const screenHeight = Math.round(Dimensions.get('window').height)
const handlePress = () => {
  alert('点击了')
}
const handleTextChange = (e) => {
  alert('输入时输入框的文字：' + e)
}
console.log('debugger')
// RNWalle.getDrawable((e) => {
//   alert('输入时输入框的文字：' + e)
// })
const Index = () => <View style={{flex:1,flexDirection: 'row',width:'100%'}}>
<View style={{width: '50%',backgroundColor: 'red',flex:1,color:'#fff'}}>
  <Text>Holle react native</Text>
  <Text>title</Text>
  <Text>text</Text>
  <View style={{flexDirection: 'row'}}>
    <Text style={{color: '#FFF',fontSize:50,transform: [{translateY:200}]}}>测试1</Text>
    <Text>测试2</Text>
  </View>
  <View style={{backgroundColor: 'green',width: screenWidth/4, height: screenHeight/2}}>
    <Text>这是获取设备屏幕宽高的练习</Text>
  </View>
  <TouchableOpacity activeOpacity={.6} onPress={handlePress}>
    <Text>可点击的view标签</Text>
  </TouchableOpacity>
  <Image source={require('./images/90.jpg')} style={{width:100,height:50}}/>
  <Image source={require('./images/10.gif')} style={{width:100,height:50}}/>
  <Image source={{uri: 'https://i1.hdslb.com/bfs/face/6c153f5b9e0299cf583e5ca2abafa7c68fd84c77.jpg@160w_160h_1c_1s.webp'}} style={{width:100,height:50}}/>
  <ImageBackground source={require('./images/10.gif')}>
    <Text>图片背景框</Text>
  </ImageBackground>
</View>
<View style={{width: '50%'}}>
  <Text>2222222222222</Text>
  <TextInput autoFocus={false} onChangeText={handleTextChange}></TextInput>  
</View>
</View>

export default Index
import React from "react";
import {View, Text, ImageBackground, NativeModules} from 'react-native'
import {launchImageLibrary} from 'react-native-image-picker'
import Mbutton from "../../components/Button";

class Home extends React.Component {
    constructor () {
        super()
        this.state = {
            homeUri: null
        }
    }
    // 获取壁纸
    getHomeWellpaper() {
        // 获取壁纸 base64 格式
        const uriBase64 = `data:image/png;base64,${NativeModules.WallpaperModule.getHomeWallpaper()}`
        const state = this.state
        state.homeUri = uriBase64
        this.setState(state)
    }
    // 拉起相册
    getAlbum () {
        launchImageLibrary({}, res => {
            if (!res.assets) return
            const file = res.assets[0].uri.replace('file://', '')
            NativeModules.WallpaperModule.setHomeWallpaper(file)
            this.getHomeWellpaper()
            NativeModules.ToastExample.show('设置成功', NativeModules.ToastExample.SHORT)
        })
    }
    componentDidMount() {
        this.getHomeWellpaper()
    }
    render() {
        return (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <ImageBackground source={{uri:this.state.homeUri}} style={{width:'100%', height: '100%'}}>
                </ImageBackground>
                <View style={{position:'absolute',bottom:20, overflow: 'hidden'}}>
                    <Mbutton title="+" style={{width: 40, height: 40, borderRadius: 20}} onPress={() => this.getAlbum()}></Mbutton>
                </View>
            </View>
        )
    }
}

export default Home
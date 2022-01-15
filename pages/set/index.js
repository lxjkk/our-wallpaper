import React from "react";
import {View, StyleSheet, Text} from 'react-native'

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    textStyle: {
        color: 'red'
    }
})
class setPage extends React.Component {
    constructor (props) {
        super(props)
    }

    render() {
        return <View style={styles.container}>
            <Text style={styles.textStyle}>这是设置页面</Text>
        </View>
    }
}

export default setPage
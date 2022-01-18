import React from "react";
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image
} from "react-native";

const styles = StyleSheet.create({
    ButtonStyle: {
        justifyContent: "center",
        alignItems: "center",
		backgroundColor: "#1890ff",
		borderRadius: 2,
		padding: 5,
		shadowColor: "black"
    },
    contentStyle: {
        backgroundColor: "#1890ff"
    },
    Text: {
        textAlign: "center",
		color: '#fff'
    },
    backgroundImage: {
        width: "100%",
        height: "100%",
        position: "absolute",
        zIndex: -2,
        alignSelf: "center"
    }
});

class Button extends React.Component {
    constructor(props) {
        super(props);
    }
    static defaultProps = {
        style: {},
        enable: true,
        textStyle: {},
        backgroundImage: null,
        backgroundImageStyle: {},
        type: "default"
    };

    render() {
        return (
            //可点击
			<TouchableOpacity
				activeOpacity={.8}
				onPress={this.props.onPress}
				style={[styles.ButtonStyle, this.props.style]}
				disabled={
					this.props.hasOwnProperty("enable") ? !this.props.enable : false
				}
			>
				{this.props.hasOwnProperty("title") ? (
					<Text
						style={[styles.Text, this.props.textStyle]}
					>
						{this.props.title}
					</Text>
				) : null}
				{this.props.hasOwnProperty("backgroundImage") ? (
					<Image
						source={this.props.backgroundImage}
						style={[styles.backgroundImage, this.props.backgroundImageStyle]}
					/>
				) : null}
				<View style={styles.contentStyle} />
			</TouchableOpacity>
        );
    }
}

export default Button;